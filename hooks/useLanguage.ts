import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Language = "en" | "is" | "no";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "is", label: "Íslenska" },
  { code: "no", label: "Norsk" },
];

const STORAGE_KEY = "@excuses_language";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw: string | null) => {
      if (raw === "en" || raw === "is" || raw === "no") {
        setLanguage(raw);
      }
    });
  }, []);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    AsyncStorage.setItem(STORAGE_KEY, lang);
  }, []);

  return { language, changeLanguage };
}
