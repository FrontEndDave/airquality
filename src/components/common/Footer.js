import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { APP } from "../../constants";

import HomeIcon from "../../assets/svg/home";
import SettingsIcon from "../../assets/svg/settings";
import SavedIcon from "../../assets/svg/saved";
import SearchIcon from "../../assets/svg/search";

const Footer = ({ active }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const handleHomeNavigate = () => {
        navigation.navigate(APP.HOME);
    };
    const handleSearchNavigate = () => {
        navigation.navigate(APP.SEARCH, { backIcon: false });
    };
    const handleSettingsNavigate = () => {
        navigation.navigate(APP.SETTINGS);
    };
    const handleSavedNavigate = () => {
        navigation.navigate(APP.SAVED);
    };

    return (
        <View style={{ width: "100%", paddingHorizontal: 25, paddingBottom: 50, position: "absolute", bottom: -10 }}>
            <View style={{ backgroundColor: "#060606", width: "100%", height: 80, borderRadius: 25, paddingHorizontal: 20, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={handleHomeNavigate}>
                    <HomeIcon
                        width={25}
                        height={25}
                        color={active === "home" ? "#2AB8A0" : "#fff"}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSearchNavigate}>
                    <SearchIcon
                        width={25}
                        height={25}
                        color={active === "search" ? "#2AB8A0" : "#fff"}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSavedNavigate}>
                    <SavedIcon
                        width={25}
                        height={25}
                        color={active === "saved" ? "#2AB8A0" : "#fff"}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSettingsNavigate}>
                    <SettingsIcon
                        width={25}
                        height={25}
                        color={active === "settings" ? "#2AB8A0" : "#fff"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;
