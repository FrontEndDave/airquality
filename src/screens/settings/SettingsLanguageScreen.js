import React from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import RightArrowIcon from "../../assets/svg/rightArrow";
import Search from "../../assets/svg/search";
import Header from "../../components/common/Header";
import Hero from "../../components/settings/Hero";

const LanguageCard = ({ languageTitle, language }) => {
    const handleChangeLanguage = () => {
        i18next.changeLanguage(language).catch((error) => console.error("Error changing language:", error));
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

    return (
        <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero text={t("settings.languageTitle")} />
            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }}>
                <TextInput
                    // onChangeText={handleSearchChange}
                    // value={searchValue}
                    placeholder={t("settings.languageSearchPlaceholder")}
                    style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 15, paddingRight: 45, paddingHorizontal: 15 }}
                />
                <View style={{ position: "absolute", right: 20, display: "flex", alignItems: "center", justifyContent: "center", height: 55 }}>
                    <Search
                        width={22}
                        height={22}
                    />
                </View>
            </View>

            <ScrollView style={{ marginTop: 25 }}>
                <LanguageCard
                    languageTitle={t("settings.polishLanguage")}
                    language='pl'
                />
                <LanguageCard
                    languageTitle={t("settings.englishLanguage")}
                    language='en'
                />
            </ScrollView>
        </View>
    );
};

export default SettingsLanguageScreen;
