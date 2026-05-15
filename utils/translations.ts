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
  about: string;
  aboutApp: string;
  version: string;
  privacyPolicy: string;
  privacyPolicyBody: string;
  termsOfUse: string;
  termsOfUseBody: string;
  dataStorage: string;
  dataStorageBody: string;
  contact: string;
  contactBody: string;
  categoryNames: Record<string, string>;
};

const translations: Record<Language, Translations> = {
  en: {
    appTitle: "1001 Excuses",
    history: "History",
    settings: "Settings",
    categories: "Categories",
    category: "Category",
    tagline: "😈 Your ticket out of work",
    language: "Language",
    clearHistory: "Clear history",
    darkModeNote: "Dark mode follows system theme.",
    noHistory: "No history yet.",
    noHistoryHint: "Generate an excuse first!",
    generateExcuse: "🎲 Generate Excuse",
    tapToGenerate: "🎲 Tap the button below\nto get your excuse!",
    copy: "📋 Copy",
    share: "📤 Share",
    about: "About",
    aboutApp: "About 1001 Excuses",
    version: "Version",
    privacyPolicy: "Privacy Policy",
    privacyPolicyBody:
      "1001 Excuses does not collect, transmit, or share any personal data. All data (excuse history and language preference) is stored locally on your device using AsyncStorage and is never sent to any server. No analytics, advertising SDKs, or third-party tracking libraries are included.",
    termsOfUse: "Terms of Use",
    termsOfUseBody:
      "This app is provided for entertainment purposes only. The excuses generated are fictional and intended to be humorous. The developer is not responsible for any consequences arising from the use of this app.",
    dataStorage: "Data & Storage",
    dataStorageBody:
      "• Excuse history — stored locally on device only.\n• Language preference — stored locally on device only.\n• No internet permission is required or used.\n• No account or sign-in is required.",
    contact: "Contact",
    contactBody: "For support or questions, email us at support@sassagold.com.",
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
    tagline: "😈 Leið þín úr vinnunni",
    language: "Tungumál",
    clearHistory: "Hreinsa sögu",
    darkModeNote: "Dökkt þema fylgir kerfisstillingum.",
    noHistory: "Engin saga enn.",
    noHistoryHint: "Búðu til afsökunarástæðu fyrst!",
    generateExcuse: "🎲 Búa til afsökunarástæðu",
    tapToGenerate: "🎲 Ýttu á takkann hér að neðan\ntil að fá afsökunarástæðu þína!",
    copy: "📋 Afrita",
    share: "📤 Deila",
    about: "Um forritið",
    aboutApp: "Um 1001 Afsakanir",
    version: "Útgáfa",
    privacyPolicy: "Persónuverndarstefna",
    privacyPolicyBody:
      "1001 Afsakanir safnar ekki, sendir ekki eða deilir persónuupplýsingum. Öll gögn (saga afsökunarástæðna og tungumálastilling) eru geymd staðbundið á tækinu þínu með AsyncStorage og eru aldrei send á neinn netþjón. Engar greiningarforrit, auglýsingaforrit eða þriðja aðila fylgniforrit eru í forritinu.",
    termsOfUse: "Notkunarskilmálar",
    termsOfUseBody:
      "Þetta forrit er eingöngu ætlað til skemmtunar. Afsökunarástæðurnar sem myndaðar eru eru skáldskapur og ætlaðar til að vera hlægilegar. Þróunaraðilinn ber enga ábyrgð á afleiðingum notkunar þessa forrits.",
    dataStorage: "Gögn og geymsla",
    dataStorageBody:
      "• Saga afsökunarástæðna — geymd staðbundið á tæki.\n• Tungumálastilling — geymd staðbundið á tæki.\n• Engin nettenging er nauðsynleg eða notuð.\n• Engin reikningur eða innskráning er nauðsynleg.",
    contact: "Hafa samband",
    contactBody: "Vegna aðstoðar eða spurninga, sendu okkur tölvupóst á support@sassagold.com.",
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
    tagline: "😈 Din billett ut av jobben",
    language: "Språk",
    clearHistory: "Slett historikk",
    darkModeNote: "Mørk modus følger systemtema.",
    noHistory: "Ingen historikk ennå.",
    noHistoryHint: "Generer en unnskyldning først!",
    generateExcuse: "🎲 Generer unnskyldning",
    tapToGenerate: "🎲 Trykk på knappen nedenfor\nfor å få unnskyldningen din!",
    copy: "📋 Kopier",
    share: "📤 Del",
    about: "Om appen",
    aboutApp: "Om 1001 Unnskyldninger",
    version: "Versjon",
    privacyPolicy: "Personvernregler",
    privacyPolicyBody:
      "1001 Unnskyldninger samler ikke inn, overfører eller deler noen personopplysninger. Alle data (unnskyldningshistorikk og språkpreferanse) lagres lokalt på enheten din ved hjelp av AsyncStorage og sendes aldri til noen server. Ingen analyse-, reklame-SDK-er eller tredjepartssporingsbiblioteker er inkludert.",
    termsOfUse: "Bruksvilkår",
    termsOfUseBody:
      "Denne appen er kun ment for underholdningsformål. Unnskyldningene som genereres er fiktive og ment å være humoristiske. Utvikleren er ikke ansvarlig for konsekvenser som oppstår ved bruk av denne appen.",
    dataStorage: "Data og lagring",
    dataStorageBody:
      "• Unnskyldningshistorikk — lagret lokalt på enheten.\n• Språkpreferanse — lagret lokalt på enheten.\n• Ingen internett-tillatelse kreves eller brukes.\n• Ingen konto eller innlogging kreves.",
    contact: "Kontakt",
    contactBody: "For støtte eller spørsmål, send oss en e-post på support@sassagold.com.",
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
