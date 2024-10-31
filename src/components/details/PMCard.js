import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { t } from "i18next";
import React, { useContext, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WeatherContext from "../../context/WeatherContext";

const PMCard = () => {
    const { weather } = useContext(WeatherContext);

    const PM10ModalRef = useRef(null);
    const PM2_5ModalRef = useRef(null);

    const snapPoints = ["55%", "65%"];
    const airQualityData = [
        { label: "PM10", value: weather.current.air_quality.pm10, modalRef: PM10ModalRef },
        { label: "PM2.5", value: weather.current.air_quality.pm2_5, modalRef: PM2_5ModalRef },
    ];

    const openModal = (modalRef) => modalRef.current?.present();

    const renderBottomSheet = (ref, title, description) => (
        <BottomSheetModal
            backgroundStyle={{ backgroundColor: "rgb(245, 247, 249)", borderRadius: 30 }}
            ref={ref}
            index={0}
            snapPoints={snapPoints}>
            <BottomSheetView style={{ flex: 1, paddingHorizontal: 36, paddingTop: 20, alignItems: "flex-start" }}>
                <Text style={{ fontFamily: "SemiBold", fontSize: 24, color: "#4d4d4d", paddingBottom: 10 }}>{t(title)}</Text>
                <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(description)}</Text>
            </BottomSheetView>
        </BottomSheetModal>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 25, width: "100%", marginTop: 15, flexDirection: "row", gap: 15 }}>
                {airQualityData.map(({ label, value, modalRef }) => (
                    <TouchableOpacity
                        key={label}
                        style={{ flex: 1 }}
                        onPress={() => openModal(modalRef)}>
                        <View style={{ backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                PM<Text style={{ fontFamily: "Medium", fontSize: 15 }}>{label.slice(2)}</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{value.toFixed(1)}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                {renderBottomSheet(PM10ModalRef, "pm10.title", "pm10.description")}
                {renderBottomSheet(PM2_5ModalRef, "pm2_5.title", "pm2_5.description")}
            </View>
        </GestureHandlerRootView>
    );
};

export default PMCard;
