import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/locales/uz.json";
import enTranslation from "../public/locales/en.json";
import ruTranslation from "../public/locales/ru.json";
import turTranslation from "../public/locales/tur.json";
import chinaTranslation from "../public/locales/china.json"; // Assuming this is the correct file for Chinese translation

const language = localStorage.getItem('i18nextLng') || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      tur: { translation: turTranslation }, // Turkish language added
      cn: { translation: chinaTranslation }, // Chinese language added
    },
  });

export default i18n;
