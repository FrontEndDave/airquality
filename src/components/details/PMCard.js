import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SMOG_BACKGROUND, SMOG_GRADIENT } from "../../constants";
import { useTranslation } from "react-i18next";

const PMCard = ({ weather }) => {
    const { t } = useTranslation();
    const airQualityIndex = weather.current.air_quality["us-epa-index"];
    const pm10 = weather.current.air_quality.pm10;
    const pm2_5 = weather.current.air_quality.pm2_5;

    const AQIDotPosition = ((airQualityIndex - 1) / 4) * 100;
    const PM10DotPosition = ((pm10 - 1) / 100) * 100;
    const PM25DotPosition = ((pm2_5 - 1) / 100) * 100;

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, gap: 15 }}>
            <View style={{ flex: 1, backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontFamily: "Regular", fontSize: 26, color: "#75879b" }}>
                        PM
                        <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>10</Text>
                    </Text>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 38, color: "#4d4d4d" }}>{pm10.toFixed(1)}</Text>
                </View>
                <View style={{ width: "100%", height: 12 }}>
                    <LinearGradient
                        colors={["#8cff66", "#ffff33", "#ffa31a", "#ff3333", "#660000"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ flex: 1, borderRadius: 10 }}>
                        <View style={{ left: `${PM10DotPosition}%`, position: "absolute", top: "50%", borderWidth: 1, borderColor: "gray", width: 12, height: 12, transform: [{ translateY: -6 }], borderRadius: 10, backgroundColor: "#fff" }} />
                    </LinearGradient>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontFamily: "Regular", fontSize: 26, color: "#75879b" }}>
                        PM
                        <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>2.5</Text>
                    </Text>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 38, color: "#4d4d4d" }}>{pm2_5.toFixed(1)}</Text>
                </View>
                <View style={{ width: "100%", height: 12 }}>
                    <LinearGradient
                        colors={["#8cff66", "#ffff33", "#ffa31a", "#ff3333", "#660000"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ flex: 1, borderRadius: 10 }}>
                        <View style={{ left: `${PM25DotPosition}%`, position: "absolute", top: "50%", borderWidth: 1, borderColor: "gray", width: 12, height: 12, transform: [{ translateY: -6 }], borderRadius: 10, backgroundColor: "#fff" }} />
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
};

export default PMCard;
