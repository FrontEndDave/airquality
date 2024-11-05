import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "../locales/en.json";
import pl from "../locales/pl.json";

const getSavedLanguage = async () => {
    const savedLanguage = await AsyncStorage.getItem("appLanguage");
    return savedLanguage || "pl";
};

const initI18next = getSavedLanguage().then((language) => {
    return i18next.use(initReactI18next).init({
        compatibilityJSON: "v3",
        lng: language,
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            pl: { translation: pl },
        },
        interpolation: { escapeValue: false },
    });
});

export { i18next, initI18next };
