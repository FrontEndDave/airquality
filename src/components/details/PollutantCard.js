import React, { useContext, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";

const PollutantCard = () => {
    const { t } = useTranslation();
    const { weather } = useContext(WeatherContext);

    const NO2ModalRef = useRef(null);
    const O3ModalRef = useRef(null);
    const SO2ModalRef = useRef(null);
    const COModalRef = useRef(null);

    const snapPoints = ["60%", "65%"];
    const airQualityData = [
        { label: "NO", bottomIndex: "2", value: weather.current.air_quality.no2, modalRef: NO2ModalRef, title: "no2.title", description: "no2.description" },
        { label: "O", bottomIndex: "3", value: weather.current.air_quality.o3, modalRef: O3ModalRef, title: "o3.title", description: "o3.description" },
        { label: "SO", bottomIndex: "2", value: weather.current.air_quality.so2, modalRef: SO2ModalRef, title: "so2.title", description: "so2.description" },
        { label: "CO", bottomIndex: "", value: weather.current.air_quality.co, modalRef: COModalRef, title: "co.title", description: "co.description" },
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
        <View style={{ paddingHorizontal: 25, width: "100%" }}>
            <View style={{ display: "flex", flexDirection: "column", gap: 15, width: "100%" }}>
                <View style={{ flexDirection: "row", width: "100%", marginTop: 15, gap: 15, justifyContent: "space-between", backgroundColor: "#E8E8E8", display: "flex", flexDirection: "row", borderRadius: 20 }}>
                    {airQualityData.slice(0, 2).map(({ label, bottomIndex, value, modalRef, index }) => (
                        <View
                            key={label}
                            style={{ flex: 1, padding: 15 }}>
                            <TouchableOpacity
                                key={label}
                                onPress={() => openModal(modalRef)}>
                                <View>
                                    <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                        {label}
                                        <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>{bottomIndex ? bottomIndex : null}</Text>
                                    </Text>
                                    <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{value.toFixed(1)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 15, backgroundColor: "#E8E8E8", display: "flex", flexDirection: "row", borderRadius: 20 }}>
                    {airQualityData.slice(2).map(({ label, bottomIndex, value, modalRef, index }) => (
                        <View
                            key={label}
                            style={{ flex: 1, padding: 15 }}>
                            <TouchableOpacity onPress={() => openModal(modalRef)}>
                                <View>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                            {label}
                                            <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>{bottomIndex ? bottomIndex : null}</Text>
                                        </Text>
                                        <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{value.toFixed(1)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            {renderBottomSheet(NO2ModalRef, "no2.title", "no2.description")}
            {renderBottomSheet(O3ModalRef, "o3.title", "o3.description")}
            {renderBottomSheet(SO2ModalRef, "so2.title", "so2.description")}
            {renderBottomSheet(COModalRef, "co.title", "co.description")}
        </View>
    );
};

export default PollutantCard;
