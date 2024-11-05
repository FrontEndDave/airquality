import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import UserIcon from "../../assets/svg/user";
import { APP } from "../../constants";

const NameSettings = () => {
    const { t } = useTranslation();
    const navigaiton = useNavigation();

    const handlePress = () => {
        navigaiton.navigate(APP.SETTINGS_NAME);
    };

    return (
        <View style={{ marginTop: 20 }}>
            <TouchableOpacity
                onPress={handlePress}
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: 65, borderWidth: 1.2, borderColor: "#E8E8E8", borderRadius: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "medium", fontSize: 17 }}>{t("settings.name.nameTitle")}</Text>
                <UserIcon />
            </TouchableOpacity>
        </View>
    );
};

export default NameSettings;
