import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import WeatherContext from "../../context/WeatherContext";
import SavedLocationsContext from "../../context/FavoriteLocations";

import { APP } from "../../constants";

import BackIcon from "../../assets/svg/backIcon";
import AddIcon from "../../assets/svg/add";
import RemoveIcon from "../../assets/svg/remove";

const Hero = ({ name, country, coordinates, saveIcon, addIcon }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { addLocation, removeLocation } = useContext(SavedLocationsContext);
    const { weather, units } = useContext(WeatherContext);

    const currentTempC = `${weather?.current?.temp_c?.toFixed(0)}°C`;
    const feelLikeTempC = `${weather?.current?.feelslike_c?.toFixed(0)}°C`;

    const currentTempF = `${weather?.current?.temp_f?.toFixed(0)}°F`;
    const feelLikeTempF = `${weather?.current?.feelslike_f?.toFixed(0)}°F`;

    const handleSaveLocation = async () => {
        addLocation(name, country, coordinates);
        navigation.navigate(APP.HOME);
    };

    const handleRemoveLocation = async () => {
        removeLocation(coordinates);
        navigation.navigate(APP.HOME);
    };

    return (
        <SafeAreaView style={{ width: "100%" }}>
            {saveIcon === true ? (
                <View style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", marginTop: 15, paddingBottom: 10, width: "100%" }}>
                    <TouchableOpacity
                        style={{ position: "absolute", left: 25, zIndex: 999 }}
                        onPress={() => navigation.goBack()}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 3 }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{name}</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#4d4d4d" }}>
                            {units.temperature === "celsius" ? currentTempC : currentTempF} | {t("feelsLikeTemperature2")}: {units.temperature === "celsius" ? feelLikeTempC : feelLikeTempF}
                        </Text>
                    </View>
                    {addIcon === true ? (
                        <TouchableOpacity
                            style={{ position: "absolute", right: 15 }}
                            onPress={handleSaveLocation}>
                            <AddIcon
                                color='#000'
                                width={36}
                                height={36}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{ position: "absolute", right: 25, top: 8 }}
                            onPress={handleRemoveLocation}>
                            <RemoveIcon
                                color='#000'
                                width={25}
                                height={25}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            ) : (
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 15, paddingBottom: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ position: "absolute", top: 0, left: 25, zIndex: 999 }}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{name}</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#4d4d4d" }}>
                            {units.temperature === "celsius" ? currentTempC : currentTempF} | {t("feelsLikeTemperature2")}: {units.temperature === "celsius" ? feelLikeTempC : feelLikeTempF}
                        </Text>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Hero;
