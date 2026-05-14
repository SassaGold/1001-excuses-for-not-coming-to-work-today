import { Language } from "../hooks/useLanguage";

export type Translations = {
  appTitle: string;
  history: string;
  settings: string;
  categories: string;
  category: string;
  tagline: string;
  language: string;
  clearHistory: string;
  darkModeNote: string;
  noHistory: string;
  noHistoryHint: string;
  generateExcuse: string;
  tapToGenerate: string;
  copy: string;
  share: string;
  categoryNames: Record<string, string>;
};

const translations: Record<Language, Translations> = {
  en: {
    appTitle: "1001 Excuses",
    history: "History",
    settings: "Settings",
    categories: "Categories",
    category: "Category",
    tagline: "😈 Your ticket out of the office",
    language: "Language",
    clearHistory: "Clear history",
    darkModeNote: "Dark mode follows system theme.",
    noHistory: "No history yet.",
    noHistoryHint: "Generate an excuse first!",
    generateExcuse: "🎲 Generate Excuse",
    tapToGenerate: "🎲 Tap the button below\nto get your excuse!",
    copy: "📋 Copy",
    share: "📤 Share",
    categoryNames: {
      any: "any",
      funny: "funny",
      believable: "believable",
      chaotic: "chaotic",
      dark: "dark",
      office: "office",
      tech: "tech",
      motorcycle: "motorcycle",
    },
  },
  is: {
    appTitle: "1001 Afsakanir",
    history: "Saga",
    settings: "Stillingar",
    categories: "Flokkar",
    category: "Flokkur",
    tagline: "😈 Leið þín úr skrifstofunni",
    language: "Tungumál",
    clearHistory: "Hreinsa sögu",
    darkModeNote: "Dökkt þema fylgir kerfisstillingum.",
    noHistory: "Engin saga enn.",
    noHistoryHint: "Búðu til afsökunarástæðu fyrst!",
    generateExcuse: "🎲 Búa til afsökunarástæðu",
    tapToGenerate: "🎲 Ýttu á takkann hér að neðan\ntil að fá afsökunarástæðu þína!",
    copy: "📋 Afrita",
    share: "📤 Deila",
    categoryNames: {
      any: "allt",
      funny: "fyndið",
      believable: "trúverðugt",
      chaotic: "glundroðakennt",
      dark: "dökkt",
      office: "skrifstofa",
      tech: "tækni",
      motorcycle: "mótorhjól",
    },
  },
  no: {
    appTitle: "1001 Unnskyldninger",
    history: "Historikk",
    settings: "Innstillinger",
    categories: "Kategorier",
    category: "Kategori",
    tagline: "😈 Din billett ut av kontoret",
    language: "Språk",
    clearHistory: "Slett historikk",
    darkModeNote: "Mørk modus følger systemtema.",
    noHistory: "Ingen historikk ennå.",
    noHistoryHint: "Generer en unnskyldning først!",
    generateExcuse: "🎲 Generer unnskyldning",
    tapToGenerate: "🎲 Trykk på knappen nedenfor\nfor å få unnskyldningen din!",
    copy: "📋 Kopier",
    share: "📤 Del",
    categoryNames: {
      any: "alle",
      funny: "morsom",
      believable: "troverdig",
      chaotic: "kaotisk",
      dark: "mørk",
      office: "kontor",
      tech: "teknologi",
      motorcycle: "motorsykkel",
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language] ?? translations.en;
}
