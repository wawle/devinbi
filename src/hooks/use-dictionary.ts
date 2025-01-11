import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/dictionary";

export function useDictionary(namespace: string) {
  const params = useParams();
  const [dictionary, setDictionary] = useState<Record<string, string> | null>(
    null,
  );

  useEffect(() => {
    async function loadDictionary() {
      try {
        const locale = (params.locale as Locale) || "en";
        const dict = await getDictionary(namespace, locale);
        setDictionary(dict);
      } catch (error) {
        console.error("Failed to load dictionary", error);
        setDictionary(null);
      }
    }

    loadDictionary();
  }, [namespace, params.locale]);

  return dictionary;
}
