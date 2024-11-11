import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { API_KEY, APP, WEATHER_BACKGROUNDS } from "../../constants";

import WeatherContext from "../../context/WeatherContext";
import SkeletonLoader from "../common/SkeletonPlaceholder";

const SavedLocationCard = ({ latitude, longitude, name }) => {
    const { units } = useContext(WeatherContext);
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [weather, setWeather] = useState(null);
    const [time, setTime] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const opacity = useRef(new Animated.Value(0)).current;

    const getWeather = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=yes`);
            setWeather(response.data);
        } catch (error) {
            console.error("Błąd podczas pobierania aktualnej pogody:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getWeather();
    }, [latitude, longitude]);

    useEffect(() => {
        if (weather?.location?.tz_id) {
            const interval = setInterval(() => {
                const currentTime = new Intl.DateTimeFormat("pl-PL", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: weather.location.tz_id,
                }).format(new Date());
                setTime(currentTime);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [weather?.location?.tz_id]);

    const isDayTime = weather?.current?.is_day === 1;
    const backgroundImage = isDayTime ? WEATHER_BACKGROUNDS[weather?.current?.condition?.code]?.day : WEATHER_BACKGROUNDS[weather?.current?.condition?.code]?.night;

    const handleImageLoad = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleImageError = () => {
        console.warn("Błąd ładowania obrazu:", backgroundImage);
    };

    const handleNavigateToDetails = () => {
        navigation.navigate(APP.DETAILS, { address: name, coordinates: { latitude, longitude } });
    };

    const maxTempC = `${weather?.forecast?.forecastday[0].day?.maxtemp_c?.toFixed(0)}°C`;
    const minTempC = `${weather?.forecast?.forecastday[0].day?.mintemp_c?.toFixed(0)}°C`;
    const currentTempC = `${weather?.current?.temp_c?.toFixed(0)}°`;

    const maxTempF = `${weather?.forecast?.forecastday[0].day?.maxtemp_f?.toFixed(0)}°F`;
    const minTempF = `${weather?.forecast?.forecastday[0].day?.mintemp_f?.toFixed(0)}°F`;
    const currentTempF = `${weather?.current?.temp_f?.toFixed(0)}°F`;

    return (
        <TouchableOpacity
            style={{ backgroundColor: "#E8E8E8", height: 140, width: "100%", borderRadius: 20, marginTop: 15 }}
            disabled={isLoading}
            onPress={handleNavigateToDetails}>
            {isLoading && (
                <View style={{ marginTop: 15, overflow: "hidden", height: "100%", width: "100%", borderRadius: 20, position: "absolute", zIndex: 999 }}>
                    <SkeletonLoader
                        width='100%'
                        height={140}
                        borderRadius={20}
                        isLoading={isLoading}
                    />
                </View>
            )}

            <Animated.View style={{ opacity: opacity }}>
                <ImageBackground
                    source={{ uri: backgroundImage }}
                    resizeMode='cover'
                    onLoadEnd={handleImageLoad}
                    onError={handleImageError}
                    style={{ width: "100%", overflow: "hidden", backgroundColor: "#E8E8E8", height: "100%", borderRadius: 20, zIndex: 999 }}>
                    {isLoading === false && (
                        <LinearGradient
                            style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, paddingBottom: 10 }}
                            start={{ x: 0.1, y: 0.2 }}
                            colors={["rgba(9,18,28,0.6)", "rgba(73,73,73,0.5)"]}>
                            <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginLeft: 15, alignItems: "flex-start", height: "100%" }}>
                                <View style={{ display: "flex", flexDirection: "col", alignItems: "flex-start" }}>
                                    <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff" }}>{name}</Text>
                                    <Text style={{ fontFamily: "SemiBold", fontSize: 28, color: "#fff" }}>{name || "Brak danych"}</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                                    <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>{time}</Text>
                                    <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>AQI {weather?.current?.air_quality["us-epa-index"]}</Text>
                                </View>
                            </View>
                            <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginRight: 15, alignItems: "flex-end", height: "100%", width: "100%", flex: 1 }}>
                                <Text style={{ fontFamily: "Regular", fontSize: 48, color: "#fff" }}>{units.temperature === "celsius" ? currentTempC : currentTempF}</Text>
                                <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff", textAlign: "right" }}>
                                    {t("from")} {units.temperature === "celsius" ? minTempC : minTempF} {t("to")} {units.temperature === "celsius" ? maxTempC : maxTempF}
                                </Text>
                            </View>
                        </LinearGradient>
                    )}
                </ImageBackground>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default SavedLocationCard;
