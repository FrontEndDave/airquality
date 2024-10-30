import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { APP, WEATHER_BACKGROUNDS } from "../../constants";

const CurrentLocationCard = ({ address, weather }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [time, setTime] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment().format("HH:mm"));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const isDayTime = weather.current.is_day === 1;
    const backgroundImage = isDayTime ? WEATHER_BACKGROUNDS[weather.current.condition.code]?.day : WEATHER_BACKGROUNDS[weather.current.condition.code]?.night;

    return (
        <TouchableOpacity onPress={() => navigation.push(APP.DETAILS, { address, weather })}>
            <ImageBackground
                source={{ uri: backgroundImage }}
                resizeMode='cover'
                style={{ width: "100%", overflow: "hidden", backgroundColor: "#E8E8E8", height: 140, borderRadius: 20 }}>
                <LinearGradient
                    style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, paddingBottom: 10 }}
                    start={{ x: 0.1, y: 0.2 }}
                    colors={["rgba(9,18,28,0.8939950980392157)", "rgba(73,73,73,0.5130427170868348)"]}>
                    <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginHorizontal: 15, alignItems: "flex-start", height: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "col", alignItems: "flex-start" }}>
                            <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff" }}>{address.region}</Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 28, color: "#fff" }}>{address.city || "Brak danych"}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                            <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>{time}</Text>
                            <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>AQI {weather.current.air_quality["us-epa-index"]}</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "col", justifyContent: "space-between", marginHorizontal: 15, alignItems: "flex-end", height: "100%" }}>
                        <Text style={{ fontFamily: "Regular", fontSize: 48, color: "#fff" }}>{weather.current.temp_c.toFixed(0)}°</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#fff" }}>
                            Od {weather.forecast.forecastday[0].day.mintemp_c.toFixed(0)}° do {weather.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}°
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default CurrentLocationCard;
