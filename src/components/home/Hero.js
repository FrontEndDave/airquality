import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import CameraIcon from "../../assets/svg/camera";
import StaticLogo from "../../assets/svg/staticLogo";
import { APP } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NameContext } from "../../context/NameContext";

const Hero = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { username } = useContext(NameContext);

    return (
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <TouchableOpacity onPress={() => navigation.navigate(APP.SETTINGS)}>
                        <View style={{ width: 48, height: 48, borderRadius: 200, backgroundColor: "#2AB8A0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <StaticLogo
                                width={28}
                                height={28}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Medium", fontSize: 18 }}>
                        {t("hello")} {username ? username : "User"}!
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(APP.AR)}>
                    <View style={{ width: 44, height: 44, borderRadius: 500, backgroundColor: "#E8E8E8", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CameraIcon
                            width={25}
                            height={25}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: "SemiBold", fontSize: 28, marginTop: 30 }}>{t("title")}</Text>
        </View>
    );
};

export default Hero;
