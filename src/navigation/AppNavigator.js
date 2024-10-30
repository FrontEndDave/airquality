import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { APP } from "../constants/index";
const Stack = createStackNavigator();

import LoadingScreen from "../screens/loading/Loading";
import HomeScreen from "../screens/home/HomeScreen";
import LocationDetailsScreen from "../screens/details/LocationDetails";

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
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
