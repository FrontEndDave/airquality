import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import AnimatedLogo from "../../assets/svg/animatedLogo";
import { APP } from "../../constants";

import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";

const LoadingScreen = ({ navigation }) => {
    const { currentLocation } = useContext(LocationContext);
    const { getCurrentLocationWeather } = useContext(WeatherContext);

    const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);

    useEffect(() => {
        if (currentLocation) {
            getCurrentLocationWeather(currentLocation.latitude, currentLocation.longitude).then(() => {
                setIsWeatherLoaded(true);
            });
        } else {
            setIsWeatherLoaded(true);
        }
    }, [currentLocation]);

    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);
    const fillColor = useSharedValue("transparent");

    const navigateToLogin = () => {
        navigation.replace(APP.HOME);
    };

    useEffect(() => {
        if (isWeatherLoaded) {
            fillColor.value = withTiming(
                "#2AB8A0",
                {
                    duration: 1500,
                    easing: Easing.linear,
                },
                () => {
                    scale.value = withTiming(5, {
                        duration: 1000,
                        easing: Easing.linear,
                    });

                    opacity.value = withTiming(
                        0,
                        {
                            duration: 1000,
                            easing: Easing.linear,
                        },
                        () => {
                            runOnJS(navigateToLogin)();
                        }
                    );
                }
            );
        }
    }, [isWeatherLoaded]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
            backgroundColor: fillColor.value,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        };
    });

    const animatedInnerContainerStyle = useAnimatedStyle(() => {
        return {
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            opacity: opacity.value,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle]}>
                <Animated.View style={[animatedInnerContainerStyle]}>
                    <AnimatedLogo />
                    <View style={styles.versionContainer}>
                        <Text style={styles.versionText}>Version 1.0.0</Text>
                    </View>
                </Animated.View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2AB8A0",
    },
    versionContainer: {
        position: "absolute",
        bottom: 75,
    },
    versionText: {
        fontFamily: "regular",
        color: "#fff",
        fontSize: 17,
    },
});

export default LoadingScreen;
