export const locales = ["tr", "en", "de"] as const;

export type Locale = (typeof locales)[number];
