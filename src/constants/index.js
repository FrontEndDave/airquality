export const API_KEY = "bf40ff6628ec49958e6183921242910";

export const WEATCHER_IMAGES = {};

export const SMOG_BACKGROUND = {
    1: "https://images.unsplash.com/photo-1565053011557-13ee5743c660?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    2: "https://images.unsplash.com/photo-1536031696538-924fe11c7037?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    3: "https://images.unsplash.com/photo-1611473253612-810bf2a2c3f0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    4: "https://images.unsplash.com/photo-1522159773307-1976d1531738?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    5: "https://images.unsplash.com/photo-1679674565030-231527d6d773?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const SMOG_GRADIENT = {
    1: ["rgba(74,74,74,0.69)", "rgba(255,255,255,0.31)"],
    2: ["rgba(9,18,28,0.35)", "rgba(155,155,155,0.3)"],
    3: ["rgba(73,73,73,0.59)", "rgba(222,222,222,0.25)"],
    4: ["rgba(39,38,38,0.69)", "rgba(173,173,173,0.5)"],
    5: ["rgba(9,18,28,0.49)", "rgba(175,175,175,0.51)"],
};

export const WEATHER_BACKGROUNDS = {
    // 1000: Sunny
    1000: {
        day: "https://example.com/images/sunny_day.jpg", // Dzień - Słonecznie
        night: "https://example.com/images/clear_night.jpg", // Noc - Czyste niebo
    },
    // 1003: Partly cloudy
    1003: {
        day: "https://example.com/images/partly_cloudy_day.jpg", // Dzień - Częściowo pochmurno
        night: "https://example.com/images/partly_cloudy_night.jpg", // Noc - Częściowo pochmurno
    },
    // 1006: Cloudy
    1006: {
        day: "https://example.com/images/cloudy_day.jpg", // Dzień - Pochmurno
        night: "https://example.com/images/cloudy_night.jpg", // Noc - Pochmurno
    },
    // 1009: Overcast
    1009: {
        day: "https://example.com/images/overcast_day.jpg", // Dzień - Całkowite zachmurzenie
        night: "https://example.com/images/overcast_night.jpg", // Noc - Całkowite zachmurzenie
    },
    // 1030: Mist
    1030: {
        day: "https://example.com/images/mist_day.jpg", // Dzień - Mgła
        night: "https://example.com/images/mist_night.jpg", // Noc - Mgła
    },
    // 1063: Patchy rain possible
    1063: {
        day: "https://example.com/images/patchy_rain_possible_day.jpg", // Dzień - Możliwy przelotny deszcz
        night: "https://example.com/images/patchy_rain_possible_night.jpg", // Noc - Możliwy przelotny deszcz
    },
    // 1066: Patchy snow possible
    1066: {
        day: "https://example.com/images/patchy_snow_possible_day.jpg", // Dzień - Możliwy przelotny śnieg
        night: "https://example.com/images/patchy_snow_possible_night.jpg", // Noc - Możliwy przelotny śnieg
    },
    // 1069: Patchy sleet possible
    1069: {
        day: "https://example.com/images/patchy_sleet_possible_day.jpg", // Dzień - Możliwy przelotny deszcz ze śniegiem
        night: "https://example.com/images/patchy_sleet_possible_night.jpg", // Noc - Możliwy przelotny deszcz ze śniegiem
    },
    // 1072: Patchy freezing drizzle possible
    1072: {
        day: "https://example.com/images/patchy_freezing_drizzle_possible_day.jpg", // Dzień - Możliwy przelotny mróz
        night: "https://example.com/images/patchy_freezing_drizzle_possible_night.jpg", // Noc - Możliwy przelotny mróz
    },
    // 1087: Thundery outbreaks possible
    1087: {
        day: "https://example.com/images/thundery_outbreaks_possible_day.jpg", // Dzień - Możliwe burze
        night: "https://example.com/images/thundery_outbreaks_possible_night.jpg", // Noc - Możliwe burze
    },
    // 1114: Blowing snow
    1114: {
        day: "https://example.com/images/blowing_snow_day.jpg", // Dzień - Zasypujący śnieg
        night: "https://example.com/images/blowing_snow_night.jpg", // Noc - Zasypujący śnieg
    },
    // 1117: Blizzard
    1117: {
        day: "https://example.com/images/blizzard_day.jpg", // Dzień - Burza śnieżna
        night: "https://example.com/images/blizzard_night.jpg", // Noc - Burza śnieżna
    },
    // 1135: Fog
    1135: {
        day: "https://example.com/images/fog_day.jpg", // Dzień - Mgła
        night: "https://example.com/images/fog_night.jpg", // Noc - Mgła
    },
    // 1147: Freezing fog
    1147: {
        day: "https://example.com/images/freezing_fog_day.jpg", // Dzień - Mroźna mgła
        night: "https://example.com/images/freezing_fog_night.jpg", // Noc - Mroźna mgła
    },
    // 1150: Patchy light drizzle
    1150: {
        day: "https://example.com/images/patchy_light_drizzle_day.jpg", // Dzień - Przelotny lekki deszcz
        night: "https://example.com/images/patchy_light_drizzle_night.jpg", // Noc - Przelotny lekki deszcz
    },
    // 1153: Light drizzle
    1153: {
        day: "https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dzień - Lekki deszcz
        night: "https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Noc - Lekki deszcz
    },
    // 1168: Freezing drizzle
    1168: {
        day: "https://example.com/images/freezing_drizzle_day.jpg", // Dzień - Mroźny deszcz
        night: "https://example.com/images/freezing_drizzle_night.jpg", // Noc - Mroźny deszcz
    },
    // 1171: Heavy freezing drizzle
    1171: {
        day: "https://example.com/images/heavy_freezing_drizzle_day.jpg", // Dzień - Intensywny mroźny deszcz
        night: "https://example.com/images/heavy_freezing_drizzle_night.jpg", // Noc - Intensywny mroźny deszcz
    },
    // 1180: Patchy light rain
    1180: {
        day: "https://example.com/images/patchy_light_rain_day.jpg", // Dzień - Przelotny lekki deszcz
        night: "https://example.com/images/patchy_light_rain_night.jpg", // Noc - Przelotny lekki deszcz
    },
    // 1183: Light rain
    1183: {
        day: "https://example.com/images/light_rain_day.jpg", // Dzień - Lekki deszcz
        night: "https://example.com/images/light_rain_night.jpg", // Noc - Lekki deszcz
    },
    // 1186: Moderate rain at times
    1186: {
        day: "https://example.com/images/moderate_rain_at_times_day.jpg", // Dzień - Umiarkowany deszcz
        night: "https://example.com/images/moderate_rain_at_times_night.jpg", // Noc - Umiarkowany deszcz
    },
    // 1189: Moderate rain
    1189: {
        day: "https://example.com/images/moderate_rain_day.jpg", // Dzień - Umiarkowany deszcz
        night: "https://example.com/images/moderate_rain_night.jpg", // Noc - Umiarkowany deszcz
    },
    // 1192: Heavy rain at times
    1192: {
        day: "https://example.com/images/heavy_rain_at_times_day.jpg", // Dzień - Intensywny deszcz
        night: "https://example.com/images/heavy_rain_at_times_night.jpg", // Noc - Intensywny deszcz
    },
    // 1195: Heavy rain
    1195: {
        day: "https://example.com/images/heavy_rain_day.jpg", // Dzień - Silny deszcz
        night: "https://example.com/images/heavy_rain_night.jpg", // Noc - Silny deszcz
    },
    // 1198: Light freezing rain
    1198: {
        day: "https://example.com/images/light_freezing_rain_day.jpg", // Dzień - Lekki deszcz mroźny
        night: "https://example.com/images/light_freezing_rain_night.jpg", // Noc - Lekki deszcz mroźny
    },
    // 1201: Moderate or heavy freezing rain
    1201: {
        day: "https://example.com/images/moderate_or_heavy_freezing_rain_day.jpg", // Dzień - Umiarkowany lub intensywny deszcz mroźny
        night: "https://example.com/images/moderate_or_heavy_freezing_rain_night.jpg", // Noc - Umiarkowany lub intensywny deszcz mroźny
    },
    // 1204: Light sleet
    1204: {
        day: "https://example.com/images/light_sleet_day.jpg", // Dzień - Lekki deszcz ze śniegiem
        night: "https://example.com/images/light_sleet_night.jpg", // Noc - Lekki deszcz ze śniegiem
    },
    // 1207: Moderate or heavy sleet
    1207: {
        day: "https://example.com/images/moderate_or_heavy_sleet_day.jpg", // Dzień - Umiarkowany lub intensywny deszcz ze śniegiem
        night: "https://example.com/images/moderate_or_heavy_sleet_night.jpg", // Noc - Umiarkowany lub intensywny deszcz ze śniegiem
    },
    // 1210: Patchy light snow
    1210: {
        day: "https://example.com/images/patchy_light_snow_day.jpg", // Dzień - Przelotny lekki śnieg
        night: "https://example.com/images/patchy_light_snow_night.jpg", // Noc - Przelotny lekki śnieg
    },
    // 1213: Light snow
    1213: {
        day: "https://example.com/images/light_snow_day.jpg", // Dzień - Lekki śnieg
        night: "https://example.com/images/light_snow_night.jpg", // Noc - Lekki śnieg
    },
    // 1216: Patchy moderate snow
    1216: {
        day: "https://example.com/images/patchy_moderate_snow_day.jpg", // Dzień - Przelotny umiarkowany śnieg
        night: "https://example.com/images/patchy_moderate_snow_night.jpg", // Noc - Przelotny umiarkowany śnieg
    },
    // 1219: Moderate snow
    1219: {
        day: "https://example.com/images/moderate_snow_day.jpg", // Dzień - Umiarkowany śnieg
        night: "https://example.com/images/moderate_snow_night.jpg", // Noc - Umiarkowany śnieg
    },
    // 1222: Patchy heavy snow
    1222: {
        day: "https://example.com/images/patchy_heavy_snow_day.jpg", // Dzień - Przelotny intensywny śnieg
        night: "https://example.com/images/patchy_heavy_snow_night.jpg", // Noc - Przelotny intensywny śnieg
    },
    // 1225: Heavy snow
    1225: {
        day: "https://example.com/images/heavy_snow_day.jpg", // Dzień - Intensywny śnieg
        night: "https://example.com/images/heavy_snow_night.jpg", // Noc - Intensywny śnieg
    },
    // 1237: Ice pellets
    1237: {
        day: "https://example.com/images/ice_pellets_day.jpg", // Dzień - Kulki lodu
        night: "https://example.com/images/ice_pellets_night.jpg", // Noc - Kulki lodu
    },
    // 1240: Light rain shower
    1240: {
        day: "https://example.com/images/light_rain_shower_day.jpg", // Dzień - Lekki deszcz
        night: "https://example.com/images/light_rain_shower_night.jpg", // Noc - Lekki deszcz
    },
    // 1243: Moderate or heavy rain shower
    1243: {
        day: "https://example.com/images/moderate_or_heavy_rain_shower_day.jpg", // Dzień - Umiarkowany lub intensywny deszcz
        night: "https://example.com/images/moderate_or_heavy_rain_shower_night.jpg", // Noc - Umiarkowany lub intensywny deszcz
    },
    // 1246: Torrential rain shower
    1246: {
        day: "https://example.com/images/torrential_rain_shower_day.jpg", // Dzień - Ulewa
        night: "https://example.com/images/torrential_rain_shower_night.jpg", // Noc - Ulewa
    },
    // 1249: Light sleet showers
    1249: {
        day: "https://example.com/images/light_sleet_showers_day.jpg", // Dzień - Lekki deszcz ze śniegiem
        night: "https://example.com/images/light_sleet_showers_night.jpg", // Noc - Lekki deszcz ze śniegiem
    },
    // 1252: Moderate or heavy sleet showers
    1252: {
        day: "https://example.com/images/moderate_or_heavy_sleet_showers_day.jpg", // Dzień - Umiarkowany lub intensywny deszcz ze śniegiem
        night: "https://example.com/images/moderate_or_heavy_sleet_showers_night.jpg", // Noc - Umiarkowany lub intensywny deszcz ze śniegiem
    },
    // 1255: Light snow showers
    1255: {
        day: "https://example.com/images/light_snow_showers_day.jpg", // Dzień - Lekki opad śniegu
        night: "https://example.com/images/light_snow_showers_night.jpg", // Noc - Lekki opad śniegu
    },
    // 1258: Moderate or heavy snow showers
    1258: {
        day: "https://example.com/images/moderate_or_heavy_snow_showers_day.jpg", // Dzień - Umiarkowany lub intensywny opad śniegu
        night: "https://example.com/images/moderate_or_heavy_snow_showers_night.jpg", // Noc - Umiarkowany lub intensywny opad śniegu
    },
    // 1261: Light showers of ice pellets
    1261: {
        day: "https://example.com/images/light_showers_of_ice_pellets_day.jpg", // Dzień - Lekki opad kulek lodu
        night: "https://example.com/images/light_showers_of_ice_pellets_night.jpg", // Noc - Lekki opad kulek lodu
    },
    // 1264: Moderate or heavy showers of ice pellets
    1264: {
        day: "https://example.com/images/moderate_or_heavy_showers_of_ice_pellets_day.jpg", // Dzień - Umiarkowany lub intensywny opad kulek lodu
        night: "https://example.com/images/moderate_or_heavy_showers_of_ice_pellets_night.jpg", // Noc - Umiarkowany lub intensywny opad kulek lodu
    },
    // 1273: Patchy rain and snow
    1273: {
        day: "https://example.com/images/patchy_rain_and_snow_day.jpg", // Dzień - Przelotny deszcz i śnieg
        night: "https://example.com/images/patchy_rain_and_snow_night.jpg", // Noc - Przelotny deszcz i śnieg
    },
    // 1276: Rain and snow
    1276: {
        day: "https://example.com/images/rain_and_snow_day.jpg", // Dzień - Deszcz i śnieg
        night: "https://example.com/images/rain_and_snow_night.jpg", // Noc - Deszcz i śnieg
    },
    // 1279: Patchy rain or snow showers
    1279: {
        day: "https://example.com/images/patchy_rain_or_snow_showers_day.jpg", // Dzień - Przelotne deszcz lub śnieg
        night: "https://example.com/images/patchy_rain_or_snow_showers_night.jpg", // Noc - Przelotne deszcz lub śnieg
    },
    // 1282: Rain or snow showers
    1282: {
        day: "https://example.com/images/rain_or_snow_showers_day.jpg", // Dzień - Deszcz lub śnieg
        night: "https://example.com/images/rain_or_snow_showers_night.jpg", // Noc - Deszcz lub śnieg
    },
};

export const APP = {
    LOADING: "LoadingScreen",
    MAIN: "MainScreen",
    HOME: "HomeScreen",
    DETAILS: "PlaceDetailsScreen",
    SETTINGS: "SettingsScreen",
    AR: "ARScreen",
    SEARCH: "SearchScreen",
};
