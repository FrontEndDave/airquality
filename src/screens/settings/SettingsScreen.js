import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import AnimatedLogo from "../../assets/svg/animatedLogo";
import { APP } from "../../constants";

import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import Hero from "../../components/settings/Hero";
import Header from "../../components/common/Header";
import LanguageSettings from "../../components/settings/Language";
import UnitsSettings from "../../components/settings/Units";
import DataSettings from "../../components/settings/Data";
import InfoSettings from "../../components/settings/Info";
import NameSettings from "../../components/settings/Name";

const SettingsScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle='dark' />
            <Header />
            <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
                <Hero />
                <LanguageSettings />
                <NameSettings />
                <UnitsSettings />
                <DataSettings />
                <InfoSettings />
            </View>
        </>
    );
};

export default SettingsScreen;
