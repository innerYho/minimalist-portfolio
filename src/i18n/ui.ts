// Textos de interfaz (no provenientes de cv.json) para las rutas es/en.
// Los datos del CV en sí viven en cv.json / cv.en.json — esto es solo lo
// que está escrito directamente en los componentes .astro.

export type Locale = "es" | "en";

export const ui = {
	es: {
		sectionTitles: {
			about: "Acerca de mí",
			experience: "Experiencia",
			education: "Educación",
			certificates: "Certificaciones",
			projects: "Proyectos",
			skills: "Habilidades",
		},
		hero: {
			badge: "Disponible para proyectos remotos",
			contact: "Contáctame",
			photoAlt: (name: string) => `Foto de ${name}`,
			profileTitle: (name: string, network: string) =>
				`Perfil de ${name} en ${network}`,
		},
		common: {
			present: "Actualidad",
			ongoing: "En curso",
			activeOngoing: "Activo / en curso",
		},
		certificates: {
			verifiable: "Credencial verificable",
			number: "N.º",
			verify: "Verificar credencial →",
		},
		projects: {
			viewProject: (name: string) => `Ver el proyecto ${name}`,
			viewProcess: "Ver proceso →",
			codeOf: (name: string) => `Código de ${name}`,
			code: "Código",
		},
		keyboard: {
			visit: (network: string) => `Visitar ${network}`,
			press: "Pulsar",
			footer: "para abrir la paleta de comandos.",
			searchPlaceholder: "Buscar comando",
			printPdf: "Imprimir o guardar pdf",
			actions: "Acciones",
			activeOngoingItem: "  Activo || en curso",
		},
		themeToggle: {
			ariaLabel: "Cambiar tema claro u oscuro",
			title: "Cambiar tema",
		},
		localeToggle: {
			label: "EN",
			ariaLabel: "Ver este CV en inglés",
			title: "English version",
			targetPath: "/en",
		},
		meta: {
			keywords:
				"Yhoiner Morales, Desarrollador Fullstack, React, PHP, Node.js, Flutter, Java, Python, IA, Bogotá, Colombia, Desarrollador de Software",
			ogLocale: "es_CO",
		},
	},
	en: {
		sectionTitles: {
			about: "About Me",
			experience: "Experience",
			education: "Education",
			certificates: "Certifications",
			projects: "Projects",
			skills: "Skills",
		},
		hero: {
			badge: "Available for remote projects",
			contact: "Contact Me",
			photoAlt: (name: string) => `Photo of ${name}`,
			profileTitle: (name: string, network: string) =>
				`${name}'s ${network} profile`,
		},
		common: {
			present: "Present",
			ongoing: "Ongoing",
			activeOngoing: "Active / ongoing",
		},
		certificates: {
			verifiable: "Verifiable credential",
			number: "No.",
			verify: "Verify credential →",
		},
		projects: {
			viewProject: (name: string) => `View ${name} project`,
			viewProcess: "View process →",
			codeOf: (name: string) => `${name} code`,
			code: "Code",
		},
		keyboard: {
			visit: (network: string) => `Visit ${network}`,
			press: "Press",
			footer: "to open the command palette.",
			searchPlaceholder: "Search command",
			printPdf: "Print or save as PDF",
			actions: "Actions",
			activeOngoingItem: "  Active || ongoing",
		},
		themeToggle: {
			ariaLabel: "Toggle light or dark theme",
			title: "Toggle theme",
		},
		localeToggle: {
			label: "ES",
			ariaLabel: "View this CV in Spanish",
			title: "Versión en español",
			targetPath: "/",
		},
		meta: {
			keywords:
				"Yhoiner Morales, Fullstack Developer, React, PHP, Node.js, Flutter, Java, Python, AI, Bogotá, Colombia, Software Developer",
			ogLocale: "en_US",
		},
	},
} as const;

/** Astro.currentLocale es 'es' | 'en' | undefined según la ruta actual. */
export function getLocale(astroLocale: string | undefined): Locale {
	return astroLocale === "en" ? "en" : "es";
}
