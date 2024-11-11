import React from "react";
import { StatusBar, View } from "react-native";

import Header from "../../components/common/Header";
import DataSettings from "../../components/settings/Data";
import Hero from "../../components/settings/Hero";
import InfoSettings from "../../components/settings/Info";
import LanguageSettings from "../../components/settings/Language";
import NameSettings from "../../components/settings/Name";
import UnitsSettings from "../../components/settings/Units";
import Footer from "../../components/common/Footer";

const SettingsScreen = () => {
    return (
        <>
            <StatusBar barStyle='dark' />
            <Header />
            <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
                <Hero showBackIcon={false} />
                <LanguageSettings />
                <NameSettings />
                <UnitsSettings />
                <DataSettings />
                <InfoSettings />
            </View>
            <Footer active='settings' />
        </>
    );
};

export default SettingsScreen;
