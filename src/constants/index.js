export const API_KEY = "bf40ff6628ec49958e6183921242910";

export const WEATCHER_IMAGES = {};

export const SMOG_BACKGROUND = {
    1: "https://images.unsplash.com/photo-1565053011557-13ee5743c660?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    2: "https://images.unsplash.com/photo-1536031696538-924fe11c7037?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    3: "https://images.unsplash.com/photo-1611473253612-810bf2a2c3f0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    4: "https://images.unsplash.com/photo-1522159773307-1976d1531738?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    5: "https://images.unsplash.com/photo-1679674565030-231527d6d773?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    6: "https://images.unsplash.com/photo-1679674565030-231527d6d773?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const SMOG_GRADIENT = {
    1: ["rgba(74,74,74,0.69)", "rgba(255,255,255,0.31)"],
    2: ["rgba(9,18,28,0.35)", "rgba(155,155,155,0.3)"],
    3: ["rgba(73,73,73,0.59)", "rgba(222,222,222,0.25)"],
    4: ["rgba(39,38,38,0.69)", "rgba(173,173,173,0.5)"],
    5: ["rgba(9,18,28,0.29)", "rgba(175,175,175,0.21)"],
    6: ["rgba(9,18,28,0.49)", "rgba(175,175,175,0.51)"],
};

export const WEATHER_BACKGROUNDS = {
    // 1000: Sunny
    1000: {
        day: "https://i.imgur.com/tmzBlVa.png", // Dzień - Słonecznie
        night: "https://i.imgur.com/jQxxNlg.png", // Noc - Czyste niebo
    },
    // 1003: Partly cloudy
    1003: {
        day: "https://i.imgur.com/XyPryJk.png", // Dzień - Częściowo pochmurno
        night: "https://i.imgur.com/5wpDHzw.png", // Noc - Częściowo pochmurno
    },
    // 1006: Cloudy
    1006: {
        day: "https://i.imgur.com/3xlCRJe.png", // Dzień - Pochmurno
        night: "https://i.imgur.com/8V4RlsF.png", // Noc - Pochmurno
    },
    // 1009: Overcast
    1009: {
        day: "https://i.imgur.com/opycWAO.png", // Dzień - Całkowite zachmurzenie
        night: "https://i.imgur.com/InCX0Af.png", // Noc - Całkowite zachmurzenie
    },
    // 1030: Mist
    1030: {
        day: "https://i.imgur.com/uzrhpB7.png", // Dzień - Mgła
        night: "https://i.imgur.com/q60naHJ.png", // Noc - Mgła
    },
    // 1063: Patchy rain possible
    1063: {
        day: "https://i.imgur.com/ImH98xH.png", // Dzień - Możliwy przelotny deszcz
        night: "", // Noc - Możliwy przelotny deszcz
    },
    // 1066: Patchy snow possible
    1066: {
        day: "https://i.imgur.com/Iy30vlp.png", // Dzień - Możliwy przelotny śnieg
        night: "", // Noc - Możliwy przelotny śnieg
    },
    // 1069: Patchy sleet possible
    1069: {
        day: "https://i.imgur.com/Iy30vlp.png", // Dzień - Możliwy przelotny deszcz ze śniegiem
        night: "", // Noc - Możliwy przelotny deszcz ze śniegiem
    },
    // 1072: Patchy freezing drizzle possible
    1072: {
        day: "", // Dzień - Możliwy przelotny mróz
        night: "", // Noc - Możliwy przelotny mróz
    },
    // 1087: Thundery outbreaks possible
    1087: {
        day: "https://i.imgur.com/xWN7nzo.png", // Dzień - Możliwe burze
        night: "https://i.imgur.com/YUMFbSZ.png", // Noc - Możliwe burze
    },
    // 1114: Blowing snow
    1114: {
        day: "https://i.imgur.com/yjXdK2I.png", // Dzień - Zasypujący śnieg
        night: "https://i.imgur.com/c3s5JtO.png", // Noc - Zasypujący śnieg
    },
    // 1117: Blizzard
    1117: {
        day: "https://i.imgur.com/EY3GqD5.png", // Dzień - Burza śnieżna
        night: "", // Noc - Burza śnieżna
    },
    // 1135: Fog
    1135: {
        day: "https://i.imgur.com/uzrhpB7.png", // Dzień - Mgła
        night: "https://i.imgur.com/q60naHJ.png", // Noc - Mgła
    },
    // 1147: Freezing fog
    1147: {
        day: "https://i.imgur.com/uzrhpB7.png", // Dzień - Mroźna mgła
        night: "https://i.imgur.com/q60naHJ.png", // Noc - Mroźna mgła
    },
    // 1150: Patchy light drizzle
    1150: {
        day: "", // Dzień - Przelotny lekki deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Przelotny lekki deszcz
    },
    // 1153: Light drizzle
    1153: {
        day: "", // Dzień - Lekki deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Lekki deszcz
    },
    // 1168: Freezing drizzle
    1168: {
        day: "", // Dzień - Mroźny deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Mroźny deszcz
    },
    // 1171: Heavy freezing drizzle
    1171: {
        day: "", // Dzień - Intensywny mroźny deszcz
        night: "", // Noc - Intensywny mroźny deszcz
    },
    // 1180: Patchy light rain
    1180: {
        day: "", // Dzień - Przelotny lekki deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Przelotny lekki deszcz
    },
    // 1183: Light rain
    1183: {
        day: "", // Dzień - Lekki deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Lekki deszcz
    },
    // 1186: Moderate rain at times
    1186: {
        day: "", // Dzień - Umiarkowany deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Umiarkowany deszcz
    },
    // 1189: Moderate rain
    1189: {
        day: "", // Dzień - Umiarkowany deszcz
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Umiarkowany deszcz
    },
    // 1192: Heavy rain at times
    1192: {
        day: "", // Dzień - Intensywny deszcz
        night: "", // Noc - Intensywny deszcz
    },
    // 1195: Heavy rain
    1195: {
        day: "", // Dzień - Silny deszcz
        night: "", // Noc - Silny deszcz
    },
    // 1198: Light freezing rain
    1198: {
        day: "", // Dzień - Lekki deszcz mroźny
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Lekki deszcz mroźny
    },
    // 1201: Moderate or heavy freezing rain
    1201: {
        day: "", // Dzień - Umiarkowany lub intensywny deszcz mroźny
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Umiarkowany lub intensywny deszcz mroźny
    },
    // 1204: Light sleet
    1204: {
        day: "https://i.imgur.com/Iy30vlp.png", // Dzień - Lekki deszcz ze śniegiem
        night: "", // Noc - Lekki deszcz ze śniegiem
    },
    // 1207: Moderate or heavy sleet
    1207: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Umiarkowany lub intensywny deszcz ze śniegiem
        night: "", // Noc - Umiarkowany lub intensywny deszcz ze śniegiem
    },
    // 1210: Patchy light snow
    1210: {
        day: "https://i.imgur.com/Iy30vlp.png", // Dzień - Przelotny lekki śnieg
        night: "", // Noc - Przelotny lekki śnieg
    },
    // 1213: Light snow
    1213: {
        day: "https://i.imgur.com/Iy30vlp.png", // Dzień - Lekki śnieg
        night: "", // Noc - Lekki śnieg
    },
    // 1216: Patchy moderate snow
    1216: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Przelotny umiarkowany śnieg
        night: "", // Noc - Przelotny umiarkowany śnieg
    },
    // 1219: Moderate snow
    1219: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Umiarkowany śnieg
        night: "", // Noc - Umiarkowany śnieg
    },
    // 1222: Patchy heavy snow
    1222: {
        day: "https://i.imgur.com/yjXdK2I.png", // Dzień - Przelotny intensywny śnieg
        night: "", // Noc - Przelotny intensywny śnieg
    },
    // 1225: Heavy snow
    1225: {
        day: "https://i.imgur.com/yjXdK2I.png", // Dzień - Intensywny śnieg
        night: "", // Noc - Intensywny śnieg
    },
    // 1237: Ice pellets
    1237: {
        day: "", // Dzień - Kulki lodu
        night: "", // Noc - Kulki lodu
    },
    // 1240: Light rain shower
    1240: {
        day: "", // Dzień - Lekki deszcz
        night: "", // Noc - Lekki deszcz
    },
    // 1243: Moderate or heavy rain shower
    1243: {
        day: "", // Dzień - Umiarkowany lub intensywny deszcz
        night: "", // Noc - Umiarkowany lub intensywny deszcz
    },
    // 1246: Torrential rain shower
    1246: {
        day: "", // Dzień - Ulewa
        night: "", // Noc - Ulewa
    },
    // 1249: Light sleet showers
    1249: {
        day: "", // Dzień - Lekki deszcz ze śniegiem
        night: "", // Noc - Lekki deszcz ze śniegiem
    },
    // 1252: Moderate or heavy sleet showers
    1252: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Umiarkowany lub intensywny deszcz ze śniegiem
        night: "", // Noc - Umiarkowany lub intensywny deszcz ze śniegiem
    },
    // 1255: Light snow showers
    1255: {
        day: "", // Dzień - Lekki opad śniegu
        night: "", // Noc - Lekki opad śniegu
    },
    // 1258: Moderate or heavy snow showers
    1258: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Umiarkowany lub intensywny opad śniegu
        night: "", // Noc - Umiarkowany lub intensywny opad śniegu
    },
    // 1261: Light showers of ice pellets
    1261: {
        day: "", // Dzień - Lekki opad kulek lodu
        night: "", // Noc - Lekki opad kulek lodu
    },
    // 1264: Moderate or heavy showers of ice pellets
    1264: {
        day: "", // Dzień - Umiarkowany lub intensywny opad kulek lodu
        night: "", // Noc - Umiarkowany lub intensywny opad kulek lodu
    },
    // 1273: Patchy rain and snow
    1273: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Przelotny deszcz i śnieg
        night: "", // Noc - Przelotny deszcz i śnieg
    },
    // 1276: Rain and snow
    1276: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Deszcz i śnieg
        night: "", // Noc - Deszcz i śnieg
    },
    // 1279: Patchy rain or snow showers
    1279: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Przelotne deszcz lub śnieg
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Przelotne deszcz lub śnieg
    },
    // 1282: Rain or snow showers
    1282: {
        day: "https://i.imgur.com/5unUKS1.jpeg", // Dzień - Deszcz lub śnieg
        night: "https://i.imgur.com/bxc2wbN.png", // Noc - Deszcz lub śnieg
    },
};

export const APP = {
    LOADING: "LoadingScreen",
    MAIN: "MainScreen",
    HOME: "HomeScreen",
    DETAILS: "PlaceDetailsScreen",
    SAVED: "SavedLocationsScreen",
    SETTINGS: "SettingsScreen",
    SEARCH: "SearchScreen",
    SETTINGS_LANGUAGE: "SettingsLanguageScreen",
    SETTINGS_UNITS: "SettingsUnitsScreen",
    SETTINGS_INFO: "SettingsInfoScreen",
    SETTINGS_NAME: "SettingsNameScreen",
};
