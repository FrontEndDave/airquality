import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";

import { SMOG_BACKGROUND, SMOG_GRADIENT } from "../../constants";
import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";

const AirQualityCard = () => {
    const { weather } = useContext(WeatherContext);
    const { t } = useTranslation();

    const AQIModalRef = useRef(null);
    const snapPoints = ["70%"];

    const airQualityIndex = weather.current.air_quality["us-epa-index"];

    const AQIDotPosition = ((airQualityIndex - 1) / 4) * 100;

    const openModal = () => AQIModalRef.current?.present();

    return (
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <Text style={{ fontFamily: "Medium", fontSize: 20, marginTop: 30 }}>{t("airQualityTitle")}</Text>
            <TouchableOpacity onPress={openModal}>
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
                                colors={["#00b300", "#ffff33", "#ffa31a", "#ff3333", "#660000"]}
                                start={{ x: 0.05, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ flex: 1, borderRadius: 10 }}>
                                <View style={{ left: `${AQIDotPosition}%`, position: "absolute", top: "50%", borderWidth: 1, borderColor: "gray", width: 12, height: 12, transform: [{ translateY: -6 }], borderRadius: 10, backgroundColor: "#fff" }} />
                            </LinearGradient>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
            <BottomSheetModal
                backgroundStyle={{ backgroundColor: "rgb(245, 247, 249)", borderRadius: 30 }}
                ref={AQIModalRef}
                enableDynamicSizing={false}
                index={0}
                snapPoints={snapPoints}>
                <BottomSheetScrollView>
                    <BottomSheetView style={{ flex: 1, paddingHorizontal: 36, paddingTop: 20, alignItems: "flex-start", paddingBottom: 50 }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24, color: "#4d4d4d", paddingBottom: 10 }}>{t("aqi.title")}</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t("aqi.description")}</Text>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24, color: "#4d4d4d", marginTop: 20, paddingBottom: 20 }}>{t("aqi.alternative")}</Text>
                        <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#00b300", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.good")}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#ffff33", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.moderate")}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#ffa31a", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.sensitive")}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#ff3333", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.unhealthy")}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#660000", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.veryUnhealthy")}</Text>
                            </View>
                        </View>
                    </BottomSheetView>
                </BottomSheetScrollView>
            </BottomSheetModal>
        </View>
    );
};

export default AirQualityCard;
