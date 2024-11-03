import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

import LoadingScreen from "../screens/loading/Loading";
import LocationDetailsScreen from "../screens/details/LocationDetails";

import { APP } from "../constants/index";
import SettingsScreen from "../screens/settings/SettingsScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ARSCreen from "../screens/ar/ARScreen";
import SearchScreen from "../screens/search/SearchScreen";
import SettingsLanguageScreen from "../screens/settings/SettingsLanguageScreen";

const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={APP.LOADING}
            screenOptions={{
                animationTypeForReplace: "push",
                headerShown: false,
                animationEnabled: true,
                headerTransparent: true,
            }}>
            <Stack.Screen
                name={APP.LOADING}
                component={LoadingScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.HOME}
                component={HomeScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.DETAILS}
                component={LocationDetailsScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.SETTINGS}
                component={SettingsScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.AR}
                component={ARSCreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.SEARCH}
                component={SearchScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
            <Stack.Screen
                name={APP.SETTINGS_LANGUAGE}
                component={SettingsLanguageScreen}
                options={{ headerShown: false, navigationBarColor: "transparent", animationEnabled: true }}
            />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
