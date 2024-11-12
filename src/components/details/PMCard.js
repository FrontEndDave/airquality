import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { t } from "i18next";
import React, { useContext, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WeatherContext from "../../context/WeatherContext";

const PMCard = () => {
    const { weather } = useContext(WeatherContext);

    const PM10ModalRef = useRef(null);
    const PM2_5ModalRef = useRef(null);

    const snapPoints = ["92%"];
    const airQualityData = [
        { label: "PM10", value: weather?.current?.air_quality?.pm10, standard: 50, modalRef: PM10ModalRef },
        { label: "PM2.5", value: weather?.current?.air_quality?.pm2_5, standard: 25, modalRef: PM2_5ModalRef },
    ];

    const openModal = (modalRef) => modalRef.current?.present();

    const renderBottomSheet = (ref, title, about, occurrence, occurrenceText, healthEffects, healthEffectsText, standard, standardText, time) => (
        <BottomSheetModal
            backgroundStyle={{ backgroundColor: "rgb(245, 247, 249)", borderRadius: 30 }}
            ref={ref}
            index={0}
            snapPoints={snapPoints}>
            <BottomSheetScrollView>
                <BottomSheetView style={{ flex: 1, paddingHorizontal: 36, paddingTop: 20, alignItems: "flex-start", paddingBottom: 50 }}>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 24, color: "#4d4d4d", paddingBottom: 10 }}>{t(title)}</Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(about)}</Text>

                    <Text style={{ fontFamily: "SemiBold", fontSize: 20, color: "#4d4d4d", paddingBottom: 10, marginTop: 20 }}>{t(occurrence)}</Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(occurrenceText)}</Text>

                    <Text style={{ fontFamily: "SemiBold", fontSize: 20, color: "#4d4d4d", paddingBottom: 10, marginTop: 20 }}>{t(healthEffects)}</Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(healthEffectsText)}</Text>

                    <Text style={{ fontFamily: "SemiBold", fontSize: 20, color: "#4d4d4d", paddingBottom: 10, marginTop: 20 }}>{t(standard)}</Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(standardText)}</Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t(time)}</Text>
                </BottomSheetView>
            </BottomSheetScrollView>
        </BottomSheetModal>
    );

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 25, width: "100%", marginTop: 15, flexDirection: "row", gap: 15 }}>
                {airQualityData.map(({ label, standard, value, modalRef }) => (
                    <TouchableOpacity
                        key={label}
                        style={{ flex: 1 }}
                        onPress={() => openModal(modalRef)}>
                        <View style={{ backgroundColor: "#E8E8E8", borderRadius: 20, padding: 15 }}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                PM<Text style={{ fontFamily: "Medium", fontSize: 15 }}>{label.slice(2)}</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 26, color: "#4d4d4d" }}>
                                {value.toFixed(1)}
                                <Text style={{ fontSize: 15 }}>µg/m³</Text>
                            </Text>
                            <Text style={{ fontFamily: "Regular", fontSize: 15, color: "#4d4d4d" }}>
                                {t("aqi.standard")}: {standard}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
                {renderBottomSheet(PM10ModalRef, "pm10.title", "pm10.about", "pm10.occurrence", "pm10.occurrenceText", "pm10.healthEffects", "pm10.healthEffectsText", "pm10.standard", "pm10.standardText", "pm10.time")}
                {renderBottomSheet(PM2_5ModalRef, "pm2_5.title", "pm2_5.about", "pm2_5.occurrence", "pm2_5.occurrenceText", "pm2_5.healthEffects", "pm2_5.healthEffectsText", "pm2_5.standard", "pm2_5.standardText", "pm2_5.time")}
            </View>
        </GestureHandlerRootView>
    );
};

export default PMCard;
