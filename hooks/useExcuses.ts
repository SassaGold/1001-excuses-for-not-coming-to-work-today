import excusesEn from "../assets/excuses.json";
import excusesIs from "../assets/excuses_is.json";
import excusesNo from "../assets/excuses_no.json";
import { Category } from "../utils/categories";
import { Language } from "./useLanguage";

export type Excuse = {
  id: number;
  category: string;
  text: string;
};

const dataByLanguage: Record<Language, Excuse[]> = {
  en: excusesEn as Excuse[],
  is: excusesIs as Excuse[],
  no: excusesNo as Excuse[],
};

export function getRandomExcuse(category: Category, language: Language = "en"): Excuse {
  const allExcuses = dataByLanguage[language];
  const pool =
    category === "any"
      ? allExcuses
      : allExcuses.filter((e) => e.category === category);
  const source = pool.length > 0 ? pool : allExcuses;
  return source[Math.floor(Math.random() * source.length)];
}

export function getExcusesByCategory(category: Category, language: Language = "en"): Excuse[] {
  const allExcuses = dataByLanguage[language];
  if (category === "any") return allExcuses;
  return allExcuses.filter((e) => e.category === category);
}
