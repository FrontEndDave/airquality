import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { APP } from "../../constants";

import Search from "../../assets/svg/search";
import Hero from "../../components/search/Hero";
import Footer from "../../components/common/Footer";
import i18next from "i18next";

const SearchScreen = (props) => {
    const { t } = useTranslation();
    const { backIcon } = props?.route?.params;
    const navigation = useNavigation();

    const [searchValue, setSearchValue] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    const handleSearchChange = async (text) => {
        setSearchValue(text);
    };

    const handleSearchSubmit = async (text) => {
        if (text) {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                    params: {
                        q: text,
                        format: "json",
                        addressdetails: 1,
                        extratags: 1,
                        limit: 4,
                        "accept-language": i18next.language === "en" ? "en-US" : "pl-PL" || "en-US",
                    },
                });
                setFilteredLocations(response.data);
            } catch (error) {
                setFilteredLocations([]);
            }
        } else {
            setFilteredLocations([]);
        }
    };

    const handleSelectLocation = (location) => {
        const latitude = location.lat;
        const longitude = location.lon;

        const selectedAddress = location.display_name.split(",")[0].trim();

        setSearchValue(selectedAddress);
        setFilteredLocations([]);

        navigation.navigate(APP.DETAILS, { address: selectedAddress, country: location.address.country, coordinates: { latitude, longitude }, addIcon: true });
    };

    return (
        <View>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "space-between" }}>
                <View>
                    <Hero backIcon={backIcon} />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 25 }}>
                        <TextInput
                            onChangeText={handleSearchChange}
                            onSubmitEditing={() => handleSearchSubmit(searchValue)}
                            value={searchValue}
                            keyboardType='web-search'
                            placeholder={t("searchPlaceholder")}
                            style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 30, paddingRight: 45, paddingHorizontal: 15 }}
                        />
                        <TouchableOpacity
                            onPress={() => handleSearchSubmit(searchValue)}
                            style={{ position: "absolute", right: 40, display: "flex", alignItems: "center", justifyContent: "center", height: 55 }}>
                            <Search
                                width={22}
                                height={22}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 25, width: "100%" }}>
                        {filteredLocations.length > 0 && (
                            <FlatList
                                data={filteredLocations}
                                keyExtractor={(item) => item.place_id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelectLocation(item)}>
                                        <Text style={{ padding: 10, borderBottomWidth: 5, borderColor: "#000", paddingBottom: 5, fontFamily: "Medium", fontSize: 16 }}>{item.display_name}</Text>
                                    </TouchableOpacity>
                                )}
                                style={{ borderRadius: 10, marginTop: 10, height: "auto", elevation: 5 }}
                            />
                        )}
                    </View>
                </View>
            </SafeAreaView>
            <Footer active='search' />
        </View>
    );
};

export default SearchScreen;
