import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming, interpolateColor } from "react-native-reanimated";

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
    const progress = useSharedValue(0);

    const navigateToLogin = () => {
        navigation.replace(APP.HOME);
    };

    useEffect(() => {
        if (isWeatherLoaded) {
            progress.value = withTiming(
                1,
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
            backgroundColor: interpolateColor(progress.value, [0, 1], ["transparent", "#2AB8A0"]),
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2AB8A0" }}>
            <Animated.View style={[animatedStyle]}>
                <Animated.View style={[animatedInnerContainerStyle]}>
                    <AnimatedLogo />
                    <View style={{ position: "absolute", bottom: 75 }}>
                        <Text style={{ fontFamily: "regular", color: "#fff", fontSize: 17 }}>Version 1.0.0</Text>
                    </View>
                </Animated.View>
            </Animated.View>
        </View>
    );
};

export default LoadingScreen;
