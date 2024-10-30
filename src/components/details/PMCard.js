import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useRef, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ReduceMotion } from "react-native-reanimated";

import WeatherContext from "../../context/WeatherContext";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const PMCard = () => {
    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["70%"];

    function handleOpenBottomSheet() {
        console.log("Opening modal:", bottomSheetModalRef.current);
        bottomSheetModalRef.current.present();
    }

    const { weather } = useContext(WeatherContext);
    const pm10 = weather.current.air_quality.pm10;
    const pm2_5 = weather.current.air_quality.pm2_5;

    const PM10DotPosition = (pm10 / 200) * 100;
    const PM25DotPosition = (pm2_5 / 100) * 100;

    return (
        <View style={{ paddingHorizontal: 25, width: "100%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, gap: 15 }}>
                <TouchableOpacity
                    onPress={handleOpenBottomSheet}
                    style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                PM
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>10</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{pm10.toFixed(1)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                PM
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>2.5</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{pm2_5.toFixed(1)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomSheetModal
                animationConfigs={{ reduceMotion: ReduceMotion.Never }}
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}>
                <View style={{ padding: 20, backgroundColor: "rgba(0, 0, 0, 0.85)", height: "100%" }}>
                    <Text style={{ color: "#fff" }}>Bottom Sheet Content</Text>
                </View>
            </BottomSheetModal>
        </View>
    );
};

export default PMCard;
