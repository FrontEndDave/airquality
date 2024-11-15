import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import StaticLogo from "../../assets/svg/staticLogo";
import { NameContext } from "../../context/NameContext";

const Hero = () => {
    const { t } = useTranslation();
    const { username } = useContext(NameContext);

    return (
        <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <View style={{ width: 48, height: 48, borderRadius: 200, backgroundColor: "#2AB8A0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <StaticLogo
                            width={28}
                            height={28}
                        />
                    </View>
                    <Text style={{ fontFamily: "Medium", fontSize: 18 }}>
                        {t("hello")} {username ? username : "User"}!
                    </Text>
                </View>
            </View>
            <Text style={{ fontFamily: "SemiBold", fontSize: 28, marginTop: 30 }}>{t("title")}</Text>
        </View>
    );
};

export default Hero;
