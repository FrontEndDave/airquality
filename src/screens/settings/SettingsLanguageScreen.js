import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RightArrowIcon from "../../assets/svg/rightArrow";
import Search from "../../assets/svg/search";
import Header from "../../components/common/Header";
import Hero from "../../components/settings/Hero";

const LanguageCard = ({ languageTitle, language }) => {
    const handleChangeLanguage = async () => {
        try {
            await i18next.changeLanguage(language);
            await AsyncStorage.setItem("appLanguage", language);
        } catch (error) {
            console.error("Error changing or saving language:", error);
        }
    };

    return (
        <TouchableOpacity
            onPress={handleChangeLanguage}
            style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 15, paddingHorizontal: 15, display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={{ color: "#4d4d4d", fontFamily: "Medium" }}>{languageTitle}</Text>
                </View>
                <RightArrowIcon
                    width={20}
                    height={20}
                />
            </View>
        </TouchableOpacity>
    );
};

const SettingsLanguageScreen = () => {
    const { t } = useTranslation();

    const [searchValue, setSearchValue] = useState("");
    const languages = [
        { title: t("settings.language.polishLanguage"), code: "pl" },
        { title: t("settings.language.englishLanguage"), code: "en" },
    ];

    const filteredLanguages = languages.filter((language) => language.title.toLowerCase().includes(searchValue.toLowerCase()));

    const handleSearchChange = (text) => {
        setSearchValue(text);
    };

    return (
        <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero text={t("settings.language.languageTitle")} />
            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }}>
                <TextInput
                    onChangeText={handleSearchChange}
                    value={searchValue}
                    placeholder={t("settings.language.languageSearchPlaceholder")}
                    style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 15, paddingRight: 45, paddingHorizontal: 15 }}
                />
                <View style={{ position: "absolute", right: 20, display: "flex", alignItems: "center", justifyContent: "center", height: 55 }}>
                    <Search
                        width={22}
                        height={22}
                    />
                </View>
            </View>

            <ScrollView style={{ marginTop: 25, height: "100%" }}>
                {filteredLanguages.map((language) => (
                    <LanguageCard
                        key={language.code}
                        languageTitle={language.title}
                        language={language.code}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default SettingsLanguageScreen;
