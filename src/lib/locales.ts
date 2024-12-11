// Define supported locales
export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

// Translations type
export type Translations = {
  [key: string]: {
    [L in Locale]: string;
  };
};

// Comprehensive translations object
export const translations: Translations = {
  welcome: {
    en: "Welcome to our Website",
    tr: "Web Sitemize Hoş Geldiniz",
  },
  description: {
    en: "This is a localized Next.js application",
    tr: "Bu, yerelleştirilmiş bir Next.js uygulamasıdır",
  },
  // Add more translation keys as needed
};

// Translation function for server-side and client-side use
export function getTranslation(locale: Locale, key: keyof typeof translations) {
  return translations[key][locale];
}
