import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";

const ScreenHeight = Dimensions.get("window").height;

import StaticLogo from "../../assets/svg/staticLogo";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: ScreenHeight * 0.08, marginHorizontal: 25 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <View style={{ width: 48, height: 48, borderRadius: 200, backgroundColor: "#2AB8A0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <StaticLogo
                            width={28}
                            height={28}
                        />
                    </View>
                    <Text style={{ fontFamily: "Medium", fontSize: 18 }}>{t("hello")}</Text>
                </View>
            </View>
            <Text style={{ fontFamily: "SemiBold", fontSize: 28, marginTop: 30, marginHorizontal: 25 }}>Sprawdź stan powietrza w dowolnym miejscu!</Text>
        </View>
    );
};

export default Hero;
