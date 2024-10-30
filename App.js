import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import { useFonts, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from "@expo-google-fonts/poppins";

import AppStackNavigator from "./src/navigation/AppNavigator";

import { LocationProvider } from "./src/context/LocationContext";
import { WeatherProvider } from "./src/context/WeatherContext";

import "./src/services/i18next";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    const [fontsLoaded] = useFonts({
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
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                return;
            }
        })();
    }, []);

    return (
        <LocationProvider>
            <WeatherProvider>
                <NavigationContainer>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <BottomSheetModalProvider>
                            <AppStackNavigator />
                        </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                </NavigationContainer>
            </WeatherProvider>
        </LocationProvider>
    );
}
