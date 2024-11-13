import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import WeatherContext from "../../context/WeatherContext";

import RightArrowIcon from "../../assets/svg/rightArrow";
import Header from "../../components/common/Header";
import Hero from "../../components/settings/Hero";
import SelectedIcon from "../../assets/svg/selected";

const UnitCard = ({ name, code, isSelected }) => {
    const { changeUnit } = useContext(WeatherContext);

    const handleUnitChange = () => {
        changeUnit(code === "celsius" || code === "fahrenheit" ? "temperature" : "speed", code);
    };

    return (
        <TouchableOpacity
            onPress={handleUnitChange}
            style={{
                width: "100%",
                height: 55,
                backgroundColor: "#E8E8E8",
                borderRadius: 15,
                marginTop: 12,
                paddingHorizontal: 15,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
            }}>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={{ color: "#4d4d4d", fontFamily: "Medium" }}>{name}</Text>
                </View>
                {isSelected ? (
                    <SelectedIcon
                        width={20}
                        height={20}
                    />
                ) : (
                    <RightArrowIcon
                        width={20}
                        height={20}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

const SettingsUnitsScreen = () => {
    const { t } = useTranslation();
    const { units } = useContext(WeatherContext);

    return (
        <View style={{ backgroundColor: "#F3F3F3", width: "100%", paddingHorizontal: 25 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero text={t("settings.units.unitsTitle")} />

            <ScrollView style={{ width: "100%", height: "100%", marginTop: 15 }}>
                <View style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 15 }}>
                    <Text style={{ fontSize: 22, fontFamily: "SemiBold", marginBottom: 8 }}>{t("settings.units.temperature")}</Text>
                    <UnitCard
                        name={t("settings.units.celsius")}
                        code='celsius'
                        isSelected={units.temperature === "celsius"}
                    />
                    <UnitCard
                        name={t("settings.units.fahrenheit")}
                        code='fahrenheit'
                        isSelected={units.temperature === "fahrenheit"}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SettingsUnitsScreen;
