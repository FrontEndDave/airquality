import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import InfoIcon from "../../assets/svg/info";

const InfoSettings = () => {
    const { t } = useTranslation();

    return (
        <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: 65, borderWidth: 1.2, borderColor: "#E8E8E8", borderRadius: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "medium", fontSize: 17 }}>{t("settings.infoTitle")}</Text>
                <InfoIcon />
            </TouchableOpacity>
        </View>
    );
};

export default InfoSettings;
