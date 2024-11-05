import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import LanguageIcon from "../../assets/svg/language";
import { useNavigation } from "@react-navigation/native";
import { APP } from "../../constants";

const LanguageSettings = () => {
    const { t } = useTranslation();
    const navigaiton = useNavigation();

    const handlePress = () => {
        navigaiton.navigate(APP.SETTINGS_LANGUAGE);
    };

    return (
        <View style={{ marginTop: 40 }}>
            <TouchableOpacity
                onPress={handlePress}
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: 65, borderWidth: 1.2, borderColor: "#E8E8E8", borderRadius: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "medium", fontSize: 17 }}>{t("settings.language.languageTitle")}</Text>
                <LanguageIcon />
            </TouchableOpacity>
        </View>
    );
};

export default LanguageSettings;
