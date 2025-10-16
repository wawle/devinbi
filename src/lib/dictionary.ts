import { Locale } from "./locales";

type Dictionary = Record<string, unknown>;

export async function getDictionary<T = Dictionary>(
  namespace: string,
  locale: Locale = "en"
) {
  const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
    en: () => import("../dictionaries/en.json"),
    tr: () => import("../dictionaries/tr.json"),
    de: () => import("../dictionaries/de.json"),
    ar: () => import("../dictionaries/ar.json"),
  };

  const selectedDictionary = dictionaries[locale];

  if (!selectedDictionary) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }

  const dict = await selectedDictionary();
  return (dict.default[namespace] || {}) as T;
}
