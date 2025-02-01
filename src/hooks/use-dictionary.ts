import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/dictionary";

interface UseDictionaryReturn {
  dictionary: Record<string, string> | null;
}

export function useDictionary(namespace: string): UseDictionaryReturn {
  const params = useParams();
  const [dictionary, setDictionary] = useState<Record<
    string,
    string
  > | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadDictionary() {
      try {
        const locale = (params.locale as Locale) || "en";
        const dict = await getDictionary(namespace, locale);

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
