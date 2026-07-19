import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { fr } from "./fr";
import { ar } from "./ar";

export const LANGS = [
  { code: "en", label: "EN", name: "English", dir: "ltr" as const, flag: "🇬🇧" },
  { code: "fr", label: "FR", name: "Français", dir: "ltr" as const, flag: "🇫🇷" },
  { code: "ar", label: "AR", name: "العربية", dir: "rtl" as const, flag: "🇩🇿" },
];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { t: en }, fr: { t: fr }, ar: { t: ar } },
    lng: "en",
    fallbackLng: "en",
    defaultNS: "t",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
