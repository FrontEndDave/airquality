import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { APP, WEATHER_BACKGROUNDS } from "../../constants";
import WeatherContext from "../../context/WeatherContext";
import SkeletonLoader from "../common/SkeletonPlaceholder";

const CurrentLocationCard = ({ address, weather }) => {
    if (!weather) return;
    const { units } = useContext(WeatherContext);
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [time, setTime] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment().format("HH:mm"));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const handlePress = () => {
        const place = address.city;
        navigation.navigate(APP.DETAILS, { place });
    };

    const isDayTime = weather.current.is_day === 1;
    const backgroundImage = isDayTime ? WEATHER_BACKGROUNDS[weather.current.condition.code]?.day : WEATHER_BACKGROUNDS[weather.current.condition.code]?.night;

    const maxTempC = `${weather.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}°C`;
    const minTempC = `${weather.forecast.forecastday[0].day.mintemp_c.toFixed(0)}°C`;
    const currentTempC = `${weather.current.temp_c.toFixed(0)}°`;

    const maxTempF = `${weather.forecast.forecastday[0].day.maxtemp_f.toFixed(0)}°F`;
    const minTempF = `${weather.forecast.forecastday[0].day.mintemp_f.toFixed(0)}°F`;
    const currentTempF = `${weather.current.temp_f.toFixed(0)}°F`;

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
        <TouchableOpacity
            disabled={isLoading}
            onPress={handlePress}>
            {isLoading && (
                <View style={{ marginTop: 15, overflow: "hidden", height: 140, width: "100%", borderRadius: 20, position: "absolute", zIndex: 999 }}>
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
                    onLoad={handleImageLoad}
                    style={{ width: "100%", overflow: "hidden", backgroundColor: "#E8E8E8", height: 140, borderRadius: 20 }}>
                    <LinearGradient
                        style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, paddingBottom: 10 }}
                        start={{ x: 0.1, y: 0.2 }}
                        colors={["rgba(9,18,28,0.8939950980392157)", "rgba(73,73,73,0.5130427170868348)"]}>
                        <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginLeft: 15, alignItems: "flex-start", height: "100%" }}>
                            <View style={{ display: "flex", flexDirection: "col", alignItems: "flex-start" }}>
                                <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff" }}>{address.region}</Text>
                                <Text style={{ fontFamily: "SemiBold", fontSize: 28, color: "#fff" }}>{address.city || "Brak danych"}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>{time}</Text>
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>AQI {weather.current.air_quality["us-epa-index"]}</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginRight: 15, alignItems: "flex-end", height: "100%", width: "100%", flex: 1 }}>
                            <Text style={{ fontFamily: "Regular", fontSize: 48, color: "#fff" }}>{units.temperature === "celsius" ? currentTempC : currentTempF}</Text>
                            <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff", textAlign: "right" }}>
                                {t("from")} {units.temperature === "celsius" ? minTempC : minTempF} {t("to")} {units.temperature === "celsius" ? maxTempC : maxTempF}
                            </Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default CurrentLocationCard;
