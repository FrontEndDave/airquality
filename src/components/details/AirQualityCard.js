import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { useTranslation } from "react-i18next";
import { Animated, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { SMOG_BACKGROUND, SMOG_GRADIENT } from "../../constants";
import WeatherContext from "../../context/WeatherContext";
import SkeletonLoader from "../common/SkeletonPlaceholder";

const AirQualityCard = () => {
    const { weather } = useContext(WeatherContext);
    if (!weather) return;
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation();

    const AQIModalRef = useRef(null);
    const snapPoints = ["70%"];

    const airQualityIndex = weather?.current?.air_quality["us-epa-index"];

    const AQIDotPosition = ((airQualityIndex - 1) / 5) * 100;

    const openModal = () => AQIModalRef.current?.present();

    const opacity = useRef(new Animated.Value(0)).current;

    const handleImageLoad = () => {
        setIsLoading(false);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const qualityTextFilter = {
        1: t("aqi.good"),
        2: t("aqi.moderate"),
        3: t("aqi.sensitive"),
        4: t("aqi.unhealthy"),
        5: t("aqi.veryUnhealthy"),
        6: t("aqi.hazardous"),
    };

    const airQualitySummaryColor = {
        1: "#00b300",
        2: "#ffff33",
        3: "#ffa31a",
        4: "#ff3333",
        5: "#660000",
        6: "#4d004d",
    };

    return (
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <Text style={{ fontFamily: "Medium", fontSize: 21, marginTop: 30, textAlign: "start" }}>{t("airQualityTitle")}</Text>
            <TouchableOpacity
                disabled={isLoading}
                onPress={openModal}>
                {isLoading && (
                    <View style={{ marginTop: 15, overflow: "hidden", height: 120, width: "100%", borderRadius: 20, position: "absolute", zIndex: 999 }}>
                        <SkeletonLoader
                            width='100%'
                            height={120}
                            borderRadius={20}
                            isLoading={isLoading}
                        />
                    </View>
                )}
                <Animated.View style={{ opacity: opacity }}>
                    <ImageBackground
                        source={{ uri: SMOG_BACKGROUND[airQualityIndex] }}
                        resizeMode='cover'
                        onLoad={handleImageLoad}
                        style={{ backgroundColor: "#E8E8E8", borderRadius: 20, marginTop: 15, overflow: "hidden", width: "100%", height: 120 }}>
                        <LinearGradient
                            style={{ width: "100%", height: "100%", display: "flex", flexDirection: "col", justifyContent: "space-between", alignItems: "start", gap: 5, paddingTop: 10, padding: 15 }}
                            start={{ x: 0.1, y: 0.2 }}
                            colors={SMOG_GRADIENT[airQualityIndex] || ["rgba(9,18,28,0.35)", "rgba(155,155,155,0.3)"]}>
                            <View style={{ paddingBottom: 15, display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Text style={{ fontFamily: "SemiBold", fontSize: 42, color: "#FFF" }}>AQI {airQualityIndex}</Text>
                            </View>
                            <View style={{ width: "100%", height: 12 }}>
                                <LinearGradient
                                    colors={["#00b300", "#ffff33", "#ffa31a", "#ff3333", "#660000", "#4d004d"]}
                                    start={{ x: 0.05, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{ flex: 1, borderRadius: 10 }}>
                                    <View
                                        style={{
                                            left: `${AQIDotPosition === 100 ? AQIDotPosition - 3.7 : AQIDotPosition}%`,
                                            position: "absolute",
                                            top: "50%",
                                            borderWidth: 1,
                                            borderColor: "gray",
                                            width: 12,
                                            height: 12,
                                            transform: [{ translateY: -6 }],
                                            borderRadius: 10,
                                            backgroundColor: "#fff",
                                        }}
                                    />
                                </LinearGradient>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </Animated.View>
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
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ backgroundColor: "#4d004d", width: 55, height: 20 }} />
                                <Text style={{ fontFamily: "Medium", fontSize: 21, color: "#4d4d4d" }}>{t("aqi.hazardous")}</Text>
                            </View>
                        </View>
                    </BottomSheetView>
                </BottomSheetScrollView>
            </BottomSheetModal>
        </View>
    );
};

export default AirQualityCard;
