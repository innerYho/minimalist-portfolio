import cvEs from "@cv";
import cvEn from "@cv-en";
import type { Locale } from "./ui";

/** Devuelve cv.json o cv.en.json según el locale de la ruta actual. */
export function getCv(locale: Locale) {
	return locale === "en" ? cvEn : cvEs;
}
