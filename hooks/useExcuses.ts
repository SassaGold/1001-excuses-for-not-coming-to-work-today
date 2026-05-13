import excusesData from "../assets/excuses.json";
import { Category } from "../utils/categories";

export type Excuse = {
  id: number;
  category: string;
  text: string;
};

const allExcuses: Excuse[] = excusesData as Excuse[];

export function getRandomExcuse(category: Category): Excuse {
  const pool =
    category === "any"
      ? allExcuses
      : allExcuses.filter((e) => e.category === category);
  const source = pool.length > 0 ? pool : allExcuses;
  return source[Math.floor(Math.random() * source.length)];
}

export function getExcusesByCategory(category: Category): Excuse[] {
  if (category === "any") return allExcuses;
  return allExcuses.filter((e) => e.category === category);
}
