# Pendientes - Minimalist Portfolio

## 🔴 Problemas Críticos

### Errores en cv.json
- [x] Corregir ortografía: "Derarrollo" → "Desarrollo"
- [x] Corregir formato de fechas: "2022-11-020"
- [ ] Revisar y corregir fechas inconsistentes:
  - Asiste Ing. S.A.S.: startDate "2025-03-20" (fecha futura)
  - UNAD: startDate posterior a endDate
  - COLNODO: startDate posterior a endDate
  - papelerialj: endDate "2025-07-20" (fecha futura)

### Código
- [x] Mover URLs hardcodeadas de Projects.astro a cv.json

---

## 🚀 Mejoras de Funcionalidad

### SEO & Meta Tags
- [ ] Agregar meta tags Open Graph para redes sociales
- [ ] Agregar meta tags de Twitter Cards
- [ ] Cambiar description genérica "Astro description" por una personalizada
- [ ] Agregar keywords relevantes
- [ ] Implementar structured data (JSON-LD) para mejor SEO

### Internacionalización (i18n)
- [ ] Implementar sistema de cambio de idioma (español/inglés)
- [ ] Configurar rutas dinámicas para idiomas
- [ ] Crear cv_english.json con tu información
- [ ] Agregar selector de idioma en la interfaz

### Modo Oscuro (Dark Mode)
- [ ] Crear toggle de tema claro/oscuro
- [ ] Implementar variables CSS para ambos temas
- [ ] Guardar preferencia en localStorage
- [ ] Respetar preferencias del sistema (prefers-color-scheme)

### PWA (Progressive Web App)
- [ ] Crear manifest.json
- [ ] Implementar service worker para funcionamiento offline
- [ ] Agregar iconos para diferentes dispositivos (192x192, 512x512)
- [ ] Configurar instalación como app

### Optimización Web
- [ ] Generar sitemap.xml automáticamente
- [ ] Agregar robots.txt para SEO
- [ ] Implementar lazy loading de imágenes
- [ ] Optimizar fuentes (font-display: swap)

### Blog (Opcional)
- [ ] Agregar sección de blog para artículos técnicos
- [ ] Usar Content Collections de Astro
- [ ] Implementar sistema de tags/categorías

---

## 🎨 Mejoras de UX/UI

### Animaciones
- [ ] Implementar View Transitions de Astro
- [ ] Agregar animaciones sutiles al scroll (fade-in, slide-up)
- [ ] Mejorar interacciones con micro-animaciones
- [ ] Agregar loading states

### Accesibilidad (a11y)
- [ ] Agregar atributos ARIA apropiados
- [ ] Mejorar contraste de colores (verificar con WCAG)
- [ ] Agregar skip links para navegación por teclado
- [ ] Mejorar orden de tabulación (tab order)
- [ ] Agregar textos alternativos en imágenes

### Responsive Design
- [ ] Optimizar padding en móviles (actualmente 4rem puede ser mucho)
- [ ] Agregar breakpoints específicos para tablets
- [ ] Probar en diferentes dispositivos y navegadores
- [ ] Mejorar grid de proyectos en móvil

---

## 📊 Mejoras Técnicas

### Analytics & Tracking
- [ ] Agregar Google Analytics o alternativa (Plausible, Umami)
- [ ] Implementar event tracking en links importantes
- [ ] Configurar objetivos y conversiones

### Optimización de Imágenes
- [ ] Usar componente `<Image>` de Astro
- [ ] Implementar lazy loading
- [ ] Generar múltiples tamaños para responsive images
- [ ] Convertir imágenes a formatos modernos (WebP, AVIF)

### Validación y Testing
- [ ] Crear schema TypeScript para cv.json
- [ ] Agregar tests unitarios para validar datos
- [ ] Implementar CI/CD con GitHub Actions
- [ ] Agregar Lighthouse CI para performance monitoring

### Performance
- [ ] Minimizar CSS no utilizado
- [ ] Implementar preload de recursos críticos
- [ ] Optimizar bundle size
- [ ] Implementar code splitting si es necesario

---

## ✨ Funcionalidades Nuevas

### Descarga de CV
- [ ] Agregar botón para generar PDF del CV
- [ ] Optimizar estilos de impresión (@media print)
- [ ] Permitir personalización antes de descargar

### Contacto
- [ ] Agregar sección de contacto con formulario
- [ ] Integrar con servicio (Formspree, EmailJS, Resend)
- [ ] Agregar validación de formulario
- [ ] Implementar protección anti-spam

### Secciones Adicionales
- [ ] Mostrar sección de Testimonios/Referencias (ya está en cv.json)
- [ ] Mostrar sección de Certificados (ya está en cv.json)
- [ ] Mostrar sección de Awards/Premios (ya está en cv.json)
- [ ] Mostrar sección de Publicaciones (ya está en cv.json)
- [ ] Mostrar sección de Volunteer (ya está en cv.json)

### Proyectos
- [ ] Agregar filtros por tecnología
- [ ] Agregar filtro por estado (activo/inactivo)
- [ ] Implementar búsqueda de proyectos
- [ ] Agregar vista de grid/lista
- [ ] Agregar imágenes/screenshots de proyectos

---

## 📦 Estructura y Organización

### TypeScript
- [ ] Convertir componentes a TypeScript más estricto
- [ ] Definir interfaces para todas las props
- [ ] Crear types desde cv.json automáticamente

### Sistema de Diseño
- [ ] Crear variables CSS (design tokens)
- [ ] Definir sistema de colores consistente
- [ ] Definir sistema de espaciados
- [ ] Documentar sistema de diseño

### Componentes Reutilizables
- [ ] Crear componente `Badge` para tecnologías
- [ ] Crear componente `Card` genérico
- [ ] Crear componente `Button` reutilizable
- [ ] Crear componente `Section` más robusto

---

## 📝 Notas

- Priorizar mejoras según impacto vs esfuerzo
- Mantener el diseño minimalista del proyecto
- Testear en múltiples navegadores antes de deployment
- Documentar cambios importantes en changelog
