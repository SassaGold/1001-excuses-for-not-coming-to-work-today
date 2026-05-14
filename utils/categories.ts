export const CATEGORIES = [
  "any",
  "funny",
  "believable",
  "chaotic",
  "dark",
  "office",
  "tech",
  "motorcycle"
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_EMOJIS: Record<string, string> = {
  any: "🎲",
  funny: "😂",
  believable: "🎯",
  chaotic: "🌀",
  dark: "🖤",
  office: "💼",
  tech: "💻",
  motorcycle: "🏍️",
};
