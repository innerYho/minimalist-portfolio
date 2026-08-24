# CV en inglés (i18n) y exportación a PDF

**Fecha:** 2026-08-21 a 2026-08-24

## Qué había antes

`astro.config.mjs` ya declaraba `i18n: { defaultLocale: 'es', locales: ['es', 'en'] }`, pero
nunca se construyó nada arriba de eso: no existía `/en`, no había `cv.en.json`, ni selector de
idioma, y el `<html lang="es">` estaba fijo en `Layout.astro`. Quedó documentado y resuelto acá.

---

## Arquitectura de i18n

```
astro.config.mjs          → declara locales ['es', 'en'], defaultLocale 'es'
cv.json                   → datos del CV en español (ya existía)
cv.en.json                → datos del CV en inglés (nuevo)
src/i18n/ui.ts             → textos de interfaz que NO vienen de cv.json (títulos de
                              sección, botones, aria-labels, meta keywords…)
src/i18n/getCv.ts          → getCv(locale) → cv.json o cv.en.json según el locale
src/pages/index.astro      → ruta "/"   (español, sin prefijo — es el defaultLocale)
src/pages/en/index.astro   → ruta "/en" (inglés)
```

Cada sección (`Hero`, `About`, `Experience`, `Education`, `Certificates`, `Projects`,
`Skills`), `Layout.astro`, `ThemeToggle.astro` y `KeyboardManager.astro` resuelven el idioma
así, en su frontmatter:

```astro
const locale = getLocale(Astro.currentLocale); // 'es' | 'en', según la ruta actual
const t = ui[locale];
const { basics } = getCv(locale);
```

`Astro.currentLocale` lo calcula Astro solo, en base al prefijo de la URL — no hay lógica de
detección propia. Por eso cada sección funciona igual sin importar si la invoca `index.astro`
o `en/index.astro`: no reciben props de idioma, se autodetectan.

### Alias nuevo en tsconfig.json
```json
"@cv-en": ["./cv.en.json"]
```
Mismo patrón que el `@cv` existente (que apunta a `cv.json`).

### Selector de idioma visible
`src/components/LocaleToggle.astro` — botón flotante junto al de tema (mismo tamaño/estilo),
muestra el código del idioma *al que cambiás* ("EN" en español, "ES" en inglés) y enlaza a la
otra ruta. Se agrega manualmente en cada página (`<LocaleToggle />`), no vive en `Layout.astro`.

### Cómo agregar/editar un texto de interfaz
1. Agregar la clave en **ambos** locales (`es` y `en`) de `src/i18n/ui.ts` — TypeScript avisa si
   falta uno porque el objeto es `as const` con la misma forma en los dos idiomas.
2. Usarlo en el componente como `t.miClave`.

### Cómo editar el contenido del CV
- Español → `cv.json`
- Inglés → `cv.en.json`

Son dos archivos independientes, no hay traducción automática — un cambio en uno no se refleja
en el otro a menos que se edite a mano.

### Caso especial: scripts del lado cliente (`<script>` en `.astro`)
Los `<script>` con `import` (como el de `KeyboardManager.astro`, que importa `ninja-keys`) **no
pueden usar `define:vars`** para recibir strings del frontmatter — Astro convierte el script en
inline al usar `define:vars`, y los scripts inline no pasan por el bundler de Vite, así que los
`import` se rompen. La solución usada: pasar los textos como atributo `data-*` en el elemento del
DOM (`data-strings={JSON.stringify(t.keyboard)}`) y leerlo desde el script con
`element.getAttribute("data-strings")`, igual que ya se hacía con `data-info`.

---

## Habilidades de IA agregadas

En `cv.json` y `cv.en.json` (sección `skills`), agregado: **Machine Learning**, **YOLO
(Detección de Objetos / Object Detection)**, **OpenCV** — y se sumó `"IA"`/`"AI"` a las keywords
de Python. También se actualizó `basics.summary` y la experiencia actual en Asiste Ingeniería
(2025-presente) en ambos idiomas para mencionar Python aplicado a IA.

---

## Exportación a PDF (`@media print`)

El sitio ya tenía la base: `.no-print`/`.print` en `Layout.astro`, y el comando "Print or save as
PDF" en la paleta de comandos (`Ctrl+K`) / `Ctrl+P`. Lo que se agregó ahora es control fino de
paginación, para que el PDF exportado se vea prolijo:

| Regla | Dónde | Qué evita |
|---|---|---|
| `@page { margin: 2cm; }` | `Layout.astro` (global) | Contenido pegado al borde físico de cualquier hoja — aplica parejo a todas |
| `h2 { break-after: avoid }` | `Section.astro` (compartido por todas las secciones) | Título de sección solo al pie de una hoja, con su contenido en la siguiente |
| `.timeline > li { break-inside: avoid }` | `Experience.astro` | Una experiencia partida a la mitad entre hojas |
| `.grid > li { break-inside: avoid }` | `Education.astro`, `Certificates.astro`, `Projects.astro` | Una tarjeta partida a la mitad entre hojas |
| `.letter p { break-inside: avoid }` | `CoverLetter.astro` | Un párrafo de la carta partido a la mitad |

Nota sobre `main { padding: 0 }` en `@media print` (en `index.astro`/`en/index.astro`): es
intencional — el único margen de página en impresión es el `@page` de arriba, para no duplicar
espacio.

**Limitación de navegador:** `@page { margin }` solo lo respeta Chrome si en el diálogo de
impresión está seleccionado "Márgenes: Predeterminados" (no "Ninguno"/"Mínimo").

---

## Carta motivacional integrada (opcional, con interruptor)

`src/components/sections/CoverLetter.astro` — carta dirigida al rol *AI Computer Vision
Engineer*, con encabezado propio (nombre/fecha/contacto tomados de `cv.en.json`) para que se vea
como una carta real al exportar, no como una sección más del CV. Solo existe en la ruta `/en`.

Se activa/desactiva sin borrar nada, con un flag en `src/pages/en/index.astro`:

```ts
const SHOW_COVER_LETTER = false; // true = se muestra antes del Hero (para exportar a una vacante)
```

Con `break-after: page` la carta ocupa su propia página y el CV arranca justo en la siguiente
(sin hoja en blanco fija — se probó y se sacó, porque si la carta ocupa 2 páginas deja una hoja
vacía de más antes del CV).

Antes de exportarla para una postulación puntual, ajustar a mano dentro del componente:
- `LETTER_DATE` (fecha del envío)
- `GREETING` (si hay nombre de reclutador en vez de "Dear Hiring Manager,")

También existe `CoverLetter_AI_ComputerVision.txt` en la raíz del repo — la misma carta en texto
plano, independiente del componente. Ese archivo **no se publica**: vive fuera de `public/` y de
`src/pages`, así que Astro nunca lo sirve por URL (mismo motivo por el que `cv.json` tampoco es
accesible desde el navegador).
