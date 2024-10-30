import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";

const ScreenHeight = Dimensions.get("window").height;

import StaticLogo from "../../assets/svg/staticLogo";

const Header = () => {
    const { t } = useTranslation();

    return <View style={{ width: "100%", height: 75 }}></View>;
};

export default Header;
