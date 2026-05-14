import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getTranslations, Translations } from "../utils/translations";

export type Language = "en" | "is" | "no";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "is", label: "Íslenska" },
  { code: "no", label: "Norsk" },
];

const STORAGE_KEY = "@excuses_language";

type LanguageContextValue = {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw: string | null) => {
        if (raw === "en" || raw === "is" || raw === "no") {
          setLanguage(raw);
        }
      })
      .catch(() => {});
  }, []);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    AsyncStorage.setItem(STORAGE_KEY, lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: getTranslations(language) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
