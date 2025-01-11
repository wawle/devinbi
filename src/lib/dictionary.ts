import { Locale } from "./locales";

// Dynamic dictionary type that can accept any namespace
type Dictionary = Record<string, Record<string, string>>;

export async function getDictionary(namespace: string, locale: Locale = "en") {
  const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
    en: () => import("../dictionaries/en.json"),
    tr: () => import("../dictionaries/tr.json"),
    de: () => import("../dictionaries/de.json"),
  };

  const selectedDictionary = dictionaries[locale];

  if (!selectedDictionary) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }

  const dict = await selectedDictionary();
  return dict.default[namespace] || {};
}
