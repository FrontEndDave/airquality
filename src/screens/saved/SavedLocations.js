import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Hero from "../../components/saved/Hero";
import SavedLocationCard from "../../components/saved/SavedLocationCard";
import SavedLocationsContext from "../../context/FavoriteLocations";

import { APP } from "../../constants";

const SavedLocationsScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { savedLocations } = useContext(SavedLocationsContext);

    const handleSearchNavigate = () => {
        navigation.navigate(APP.SEARCH, { backIcon: true });
    };

    return (
        <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
            <StatusBar barStyle='dark' />
            <Header />
            <Hero />

            <ScrollView style={{ marginTop: 20, width: "100%", paddingHorizontal: 25 }}>
                <View style={{ height: "100%", paddingBottom: 150, display: "flex", flexDirection: "column" }}>
                    {savedLocations.map((location, index) => (
                        <SavedLocationCard
                            key={index}
                            latitude={location.coordinates.latitude}
                            longitude={location.coordinates.longitude}
                            name={location.name}
                        />
                    ))}
                    {savedLocations.length === 5 ? (
                        <View style={{ width: "100%", height: 125, backgroundColor: "#E8E8E8", marginTop: 15, borderRadius: 20, display: "flex", alignItems: "center", paddingHorizontal: 15, justifyContent: "start", flexDirection: "row" }}>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontFamily: "SemiBold", fontSize: 18, color: "#4d4d4d" }}>{t("limitTitle")}!</Text>
                                <Text style={{ fontFamily: "Regular", fontSize: 16, color: "#4d4d4d" }}>{t("limitText")}</Text>
                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity
                            onPress={handleSearchNavigate}
                            style={{ width: "100%", height: 80, backgroundColor: "#E8E8E8", marginTop: 15, borderRadius: 20, display: "flex", alignItems: "center", paddingHorizontal: 15, justifyContent: "start", flexDirection: "row" }}>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontFamily: "SemiBold", fontSize: 18, color: "#4d4d4d" }}>+ {t("addNewLocation")}!</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
            <Footer active='saved' />
        </View>
    );
};

export default SavedLocationsScreen;
