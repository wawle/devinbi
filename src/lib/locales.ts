export const locales = ["en", "tr", "de"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];
