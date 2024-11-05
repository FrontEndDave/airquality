import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import BinIcon from "../../assets/svg/bin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataSettings = () => {
    const { t } = useTranslation();
    const [isModalVisible, setModalVisible] = useState(false);

    const clearAllData = async () => {
        try {
            await AsyncStorage.clear();

            setUsername("User");

            setModalVisible(false);
        } catch (error) {
            console.error("Error clearing app data:", error);
        }
    };

    return (
        <View style={{ marginTop: 20 }}>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: 65, borderWidth: 1.2, borderColor: "#E8E8E8", borderRadius: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "medium", fontSize: 17 }}>{t("settings.data.dataTitle")}</Text>
                <BinIcon />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <View style={{ width: "80%", padding: 20, backgroundColor: "#FFF", borderRadius: 10, alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 19, fontFamily: "Medium", marginBottom: 15 }}>{t("settings.data.clearDataConfirmation")}</Text>
                        <Text style={{ fontSize: 15, color: "#555", marginBottom: 25 }}>{t("settings.data.clearDataWarning")}</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={{ padding: 10, backgroundColor: "#E8E8E8", borderRadius: 8, width: "45%", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Medium" }}>{t("settings.data.cancel")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={clearAllData}
                                style={{ padding: 10, backgroundColor: "#FF6B6B", borderRadius: 8, width: "45%", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Medium", color: "#FFF" }}>{t("settings.data.confirm")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default DataSettings;
