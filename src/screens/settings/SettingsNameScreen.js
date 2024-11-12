import React, { useContext, useState } from "react";
import { StatusBar, TextInput, View } from "react-native";
import { useTranslation } from "react-i18next";

import Header from "../../components/common/Header";
import Hero from "../../components/settings/Hero";
import { NameContext } from "../../context/NameContext";

const SettingsNameScreen = () => {
    const { t } = useTranslation();
    const { username, updateUsername } = useContext(NameContext);

    const [inputValue, setInputValue] = useState(username);

    const handleInputValueChange = (text) => {
        setInputValue(text);
    };

    const handleNameChange = () => {
        updateUsername(inputValue);
    };

    return (
        <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero text={t("settings.name.nameTitle")} />

            <TextInput
                onChangeText={handleInputValueChange}
                maxLength={15}
                onSubmitEditing={handleNameChange}
                value={inputValue}
                keyboardType='web-search'
                placeholder={t("settings.name.nameInputPlaceholder")}
                style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 15, paddingRight: 45, paddingHorizontal: 15 }}
            />
        </View>
    );
};

export default SettingsNameScreen;
