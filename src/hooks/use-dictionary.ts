import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/dictionary";

type DictionaryRecord = Record<string, unknown>;

interface UseDictionaryReturn<T extends DictionaryRecord> {
  dictionary: T | null;
}

export function useDictionary<T extends DictionaryRecord = DictionaryRecord>(
  namespace: string
): UseDictionaryReturn<T> {
  const params = useParams();
  const [dictionary, setDictionary] = useState<T | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadDictionary() {
      try {
        const locale = (params.locale as Locale) || "en";
        const dict = await getDictionary<T>(namespace, locale);

        if (isMounted) {
          setDictionary(dict);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to load dictionary", error);
          setDictionary(null);
        }
      }
    }

    loadDictionary();

    return () => {
      isMounted = false;
    };
  }, [namespace, params.locale]);

  return { dictionary };
}
