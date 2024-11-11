import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { APP } from "../../constants";

import SavedLocationsContext from "../../context/FavoriteLocations";
import FavoritePlaceCard from "./FavouritePlaceCard";

const FavoriteLocations = ({ currentLocation }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { savedLocations } = useContext(SavedLocationsContext);

    const handleNavigateToSaved = () => {
        navigation.navigate(APP.SAVED);
    };

    const handleNavigateToSearch = () => {
        navigation.navigate(APP.SEARCH, { backIcon: true });
    };

    return (
        <View style={{ marginTop: 40, paddingBottom: currentLocation === false ? 150 : 0 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 25, paddingHorizontal: 25 }}>
                <Text style={{ fontFamily: "Medium", fontSize: 20 }}>{t("savedLocations")}</Text>
                {savedLocations.length > 1 ? (
                    <TouchableOpacity onPress={handleNavigateToSaved}>
                        <Text style={{ fontFamily: "medium", fontSize: 18, color: "#BABABA" }}>{t("seeMore")}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleNavigateToSearch}>
                        <Text style={{ fontFamily: "medium", fontSize: 18, color: "#BABABA" }}>{t("addLocation")}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView
                style={{ marginLeft: 25 }}
                horizontal
                pagingEnabled
                snapToInterval={156}
                decelerationRate='fast'
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}>
                {savedLocations.map((location, index) => (
                    <FavoritePlaceCard
                        key={index}
                        latitude={location.coordinates.latitude}
                        longitude={location.coordinates.longitude}
                        name={location.name}
                        country={location.country}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default FavoriteLocations;
