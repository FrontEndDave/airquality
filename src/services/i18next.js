import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import pl from "../locales/pl.json";

i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "pl",
    fallbackLng: "en",
    resources: {
        en: {
            translation: en,
        },
        pl: {
            translation: pl,
        },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
