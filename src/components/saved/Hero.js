import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <View style={{ width: "100%" }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 24, paddingHorizontal: 50, textAlign: "center" }}>{t("savedLocations")}</Text>
                </View>
            </View>
        </View>
    );
};

export default Hero;
