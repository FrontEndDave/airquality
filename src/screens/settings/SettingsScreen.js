import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import AnimatedLogo from "../../assets/svg/animatedLogo";
import { APP } from "../../constants";

import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";

const SettingsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );
};

export default SettingsScreen;
