export const locales = ["en", "tr", "de", "ar"] as const;

export type Locale = (typeof locales)[number];
