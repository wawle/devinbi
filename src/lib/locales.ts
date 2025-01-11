export const locales = ["tr", "en", "de"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];
