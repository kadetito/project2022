import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DateTime } from "luxon";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng: any) => {
        // legacy usage
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime.DATE_HUGE);
        }
        return value;
      },
    },
  });
