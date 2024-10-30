import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, Text, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";

import { SMOG_BACKGROUND, SMOG_GRADIENT } from "../../constants";

const AirQualityCard = () => {
    const { weather } = useContext(WeatherContext);
    const { t } = useTranslation();
    const airQualityIndex = weather.current.air_quality["us-epa-index"];

    const AQIDotPosition = ((airQualityIndex - 1) / 4) * 100;

    return (
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <Text style={{ fontFamily: "Medium", fontSize: 20, marginTop: 30 }}>{t("airQualityTitle")}</Text>
            <ImageBackground
                source={{ uri: SMOG_BACKGROUND[airQualityIndex] }}
                resizeMode='cover'
                style={{ backgroundColor: "#E8E8E8", borderRadius: 20, marginTop: 15, overflow: "hidden", width: "100%", height: 120 }}>
                <LinearGradient
                    style={{ width: "100%", height: "100%", display: "flex", flexDirection: "col", justifyContent: "space-between", alignItems: "start", gap: 5, paddingTop: 10, padding: 15 }}
                    start={{ x: 0.1, y: 0.2 }}
                    colors={SMOG_GRADIENT[airQualityIndex]}>
                    <View style={{ paddingBottom: 15, display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 42, color: "#FFF" }}>AQI {airQualityIndex}</Text>
                    </View>
                    <View style={{ width: "100%", height: 12 }}>
                        <LinearGradient
                            colors={["#8cff66", "#ffff33", "#ffa31a", "#ff3333", "#660000"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ flex: 1, borderRadius: 10 }}>
                            <View style={{ left: `${AQIDotPosition}%`, position: "absolute", top: "50%", borderWidth: 1, borderColor: "gray", width: 12, height: 12, transform: [{ translateY: -6 }], borderRadius: 10, backgroundColor: "#fff" }} />
                        </LinearGradient>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default AirQualityCard;
