// import "intl-pluralrules";
// import * as Localization from "react-native-localize";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";

// import en from "./locales/en.json";
// import pl from "./locales/pl.json";

// const languageDetector = {
//     type: "languageDetector",
//     async: true,
//     detect: (callback) => {
//         const locales = Localization.getLocales();
//         const languageCode = locales[0]?.languageCode || "en";
//         callback(languageCode);
//     },
//     init: () => {},
//     cacheUserLanguage: () => {},
// };

// i18n.use(HttpApi)
//     .use(languageDetector) // Użycie react-native-localize jako detektor języka
//     .use(initReactI18next)
//     .init({
//         fallbackLng: "pl", // Język domyślny
//         backend: {
//             loadPath: "./locales/{{lng}}.json", // Poprawna ścieżka dla plików JSON z tłumaczeniami
//         },
//         interpolation: {
//             escapeValue: false,
//         },
//     });

// export default i18n;
