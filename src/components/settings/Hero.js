import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import StaticLogo from "../../assets/svg/staticLogo";
import { useNavigation } from "@react-navigation/native";
import { APP } from "../../constants";
import CameraIcon from "../../assets/svg/camera";

import BackIcon from "../../assets/svg/backIcon";

const Hero = ({ text }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    return (
        <View style={{ width: "100%" }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}>
                    <BackIcon
                        color='#000'
                        width={30}
                        height={30}
                    />
                </TouchableOpacity>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{text ? text : t("settingsTitle")}</Text>
                </View>
            </View>
        </View>
    );
};

export default Hero;
