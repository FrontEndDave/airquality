import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black, useFonts } from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { i18next } from "./src/services/i18next";

import AppStackNavigator from "./src/navigation/AppNavigator";

import { LocationProvider } from "./src/context/LocationContext";
import { WeatherProvider } from "./src/context/WeatherContext";
import { SavedLocationsProvider } from "./src/context/FavoriteLocations";
import { NameProvider } from "./src/context/NameContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./src/services/i18next";

function App() {
    const [languageLoaded, setLanguageLoaded] = useState(false);
    const [fontsLoaded] = useFonts({
        Thin: Poppins_100Thin,
        ExtraLight: Poppins_200ExtraLight,
        Light: Poppins_300Light,
        Regular: Poppins_400Regular,
        Medium: Poppins_500Medium,
        SemiBold: Poppins_600SemiBold,
        Bold: Poppins_700Bold,
        ExtraBold: Poppins_800ExtraBold,
        Black: Poppins_900Black,
    });

    useEffect(() => {
        const loadSettings = async () => {
            await Location.requestForegroundPermissionsAsync();
            let { status } = await Notifications.getPermissionsAsync();
            if (status !== "granted") {
                await Notifications.requestPermissionsAsync();
            }

            const savedLanguage = await AsyncStorage.getItem("appLanguage");
            if (savedLanguage) {
                await i18next.changeLanguage(savedLanguage);
            }
            setLanguageLoaded(true);
        };

        loadSettings();
    }, []);
    return (
        <LocationProvider>
            <WeatherProvider>
                <NameProvider>
                    <SavedLocationsProvider>
                        <NavigationContainer>
                            <GestureHandlerRootView style={{ flex: 1 }}>
                                <BottomSheetModalProvider>
                                    <AppStackNavigator />
                                </BottomSheetModalProvider>
                            </GestureHandlerRootView>
                        </NavigationContainer>
                    </SavedLocationsProvider>
                </NameProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;
