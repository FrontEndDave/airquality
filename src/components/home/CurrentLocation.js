import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import { APP, WEATHER_BACKGROUNDS } from "../../constants";

const CurrentLocation = () => {
    const navigation = useNavigation();
    const { address } = useContext(LocationContext);
    const { weather } = useContext(WeatherContext);

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
        <View style={{ marginTop: 40, marginHorizontal: 25, paddingBottom: 50 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 15 }}>
                <Text style={{ fontFamily: "Medium", fontSize: 20 }}>Aktualna lokalizacja</Text>
            </View>
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
                            <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#fff" }}>{time}</Text>
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
        </View>
    );
};

export default CurrentLocation;
