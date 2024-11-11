import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import axios from "axios";

import { API_KEY, APP, WEATHER_BACKGROUNDS } from "../../constants";
import SkeletonLoader from "../common/SkeletonPlaceholder";

const FavoritePlaceCard = ({ name, country, latitude, longitude }) => {
    const navigaiton = useNavigation();
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=yes`);
            setWeather(response.data);
        } catch (error) {
            console.error("Błąd podczas pobierania aktualnej pogody:", error);
        }
    };

    useEffect(() => {
        getWeather(latitude, longitude);
    }, [latitude, longitude]);

    const isDayTime = weather?.current?.is_day === 1;
    const backgroundImage = isDayTime ? WEATHER_BACKGROUNDS[weather?.current?.condition?.code]?.day : WEATHER_BACKGROUNDS[weather?.current?.condition?.code]?.night;

    const handleNavigateToDetails = () => {
        navigaiton.navigate(APP.DETAILS, { address: name, coordinates: { latitude, longitude } });
    };

    const opacity = useRef(new Animated.Value(0)).current;

    const handleImageLoad = () => {
        setIsLoading(false);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={{ width: 186, backgroundColor: "#E8E8E8", height: 246, borderRadius: 20, marginRight: 20, overflow: "hidden" }}>
            <TouchableOpacity
                disabled={isLoading}
                onPress={handleNavigateToDetails}>
                {isLoading && (
                    <View style={{ marginTop: 15, overflow: "hidden", height: "100%", width: "100%", borderRadius: 20, position: "absolute", zIndex: 999 }}>
                        <SkeletonLoader
                            width='100%'
                            height='100%'
                            borderRadius={20}
                            isLoading={isLoading}
                        />
                    </View>
                )}

                <Animated.View style={{ opacity: opacity }}>
                    <ImageBackground
                        onLoad={handleImageLoad}
                        source={{ uri: backgroundImage }}
                        resizeMode='cover'
                        style={{ width: "100%", overflow: "hidden", backgroundColor: "#E8E8E8", height: "100%", borderRadius: 20 }}>
                        <LinearGradient
                            style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, paddingBottom: 10 }}
                            start={{ x: 0.1, y: 0.2 }}
                            colors={["rgba(9,18,28,0.6)", "rgba(73,73,73,0.5)"]}>
                            <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginHorizontal: 15, alignItems: "flex-start", height: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "col", alignItems: "flex-start" }}>
                                    <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff" }}>{country}</Text>
                                    <Text style={{ fontFamily: "SemiBold", fontSize: 28, color: "#fff" }}>{weather ? name : "Brak danych"}</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                                    <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>AQI {weather ? weather.current.air_quality["us-epa-index"] : "Brak danych"}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default FavoritePlaceCard;
