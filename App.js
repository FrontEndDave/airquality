import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black, useFonts } from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import AppStackNavigator from "./src/navigation/AppNavigator";

import LocationContext, { LocationProvider } from "./src/context/LocationContext";
import { WeatherProvider } from "./src/context/WeatherContext";
import { SavedLocationsProvider } from "./src/context/FavoriteLocations";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { registerBackgroundFetchAsync } from "./src/services/backgroundFetch";
import "./src/services/i18next";
import { i18next } from "./src/services/i18next";
import { NameProvider } from "./src/context/NameContext";

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
        (async () => {
            await Location.requestForegroundPermissionsAsync();
        })();
        (async () => {
            let { status } = await Notifications.getPermissionsAsync();
            if (status !== "granted") {
                await Notifications.requestPermissionsAsync();
            }
        })();

        const loadLanguageSetting = async () => {
            const savedLanguage = await AsyncStorage.getItem("appLanguage");
            if (savedLanguage) {
                await i18next.changeLanguage(savedLanguage);
            }
            setLanguageLoaded(true);
        };

        loadLanguageSetting();
    }, []);

    return (
        <LocationProvider>
            <WeatherProvider>
                <NameProvider>
                    <SavedLocationsProvider>
                        <NavigationContainer>
                            <GestureHandlerRootView style={{ flex: 1 }}>
                                <BottomSheetModalProvider>
                                    <BackgroundFetchComponent />
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

const BackgroundFetchComponent = () => {
    const { currentLocation } = React.useContext(LocationContext);

    React.useEffect(() => {
        const registerBackgroundTask = async () => {
            if (currentLocation) {
                const { latitude, longitude } = currentLocation;
                await registerBackgroundFetchAsync(latitude, longitude);
            }
        };

        registerBackgroundTask();
    }, [currentLocation]);

    return null;
};

export default App;
