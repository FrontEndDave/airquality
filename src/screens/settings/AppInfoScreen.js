import React from "react";
import { useTranslation } from "react-i18next";
import { StatusBar, Text, View, ScrollView } from "react-native";

import Header from "../../components/common/Header";
import Hero from "../../components/settings/Hero";

const AppInfoScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={{ backgroundColor: "#F3F3F3", flex: 1, paddingLeft: 25 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero text={t("settings.info.infoTitle")} />

            <ScrollView style={{ marginTop: 20, width: "100%", paddingRight: 25 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontFamily: "SemiBold", marginBottom: 8 }}>{t("settings.info.authorTitle")}</Text>
                    <Text style={{ fontSize: 18, color: "#4d4d4d" }}>{t("settings.info.authorName")}</Text>
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontFamily: "SemiBold", marginBottom: 8 }}>{t("settings.info.technologyTitle")}</Text>
                    <Text style={{ fontSize: 18, color: "#4d4d4d" }}>{t("settings.info.technologyDetails")}</Text>
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontFamily: "SemiBold", marginBottom: 8 }}>{t("settings.info.versionTitle")}</Text>
                    <Text style={{ fontSize: 18, color: "#4d4d4d" }}>{t("settings.info.versionNumber")}</Text>
                </View>

                <View style={{ marginBottom: 20, paddingBottom: 50 }}>
                    <Text style={{ fontSize: 20, fontFamily: "SemiBold", marginBottom: 8 }}>{t("settings.info.descriptionTitle")}</Text>
                    <Text style={{ fontSize: 18, color: "#4d4d4d" }}>{t("settings.info.descriptionText")}</Text>
                    <Text style={{ fontSize: 18, color: "#4d4d4d", marginTop: 10 }}>{t("settings.info.secondDescriptionText")}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default AppInfoScreen;
