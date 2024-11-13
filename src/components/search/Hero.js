import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import BackIcon from "../../assets/svg/backIcon";
import { useTranslation } from "react-i18next";

const Hero = ({ backIcon }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    return (
        <SafeAreaView style={{ marginHorizontal: 25 }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 15, paddingBottom: 10 }}>
                {backIcon !== false && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                )}
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{t("searchTitle")}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Hero;
