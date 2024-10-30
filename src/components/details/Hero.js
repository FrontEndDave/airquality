import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";

import BackIcon from "../../assets/svg/backIcon";
import { useNavigation } from "@react-navigation/native";

const Hero = ({ name }) => {
    const navigation = useNavigation();
    // const { t } = useTranslation();

    return (
        <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon
                    color='#000'
                    width={30}
                    height={30}
                />
            </TouchableOpacity>
            <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{name}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon
                    color='#000'
                    width={30}
                    height={30}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Hero;
