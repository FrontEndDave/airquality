import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Search from "../../assets/svg/search";
import Hero from "../../components/search/Hero";
import { APP } from "../../constants";

const SearchScreen = () => {
    const navigation = useNavigation();

    const [searchValue, setSearchValue] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);

    const handleSearchChange = async (text) => {
        setSearchValue(text);
        if (text) {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                    params: {
                        q: text,
                        format: "json",
                        addressdetails: 1,
                        limit: 5,
                    },
                });
                setFilteredLocations(response.data);
            } catch (error) {
                console.error("Error fetching locations:", error);
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

        navigation.navigate(APP.DETAILS, { address: selectedAddress, coordinates: { latitude, longitude } });
    };

    return (
        <View>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#F3F3F3" }}>
                <Hero />
                <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", paddingHorizontal: 25 }}>
                    <TextInput
                        onChangeText={handleSearchChange}
                        value={searchValue}
                        placeholder='Search destination'
                        style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 30, paddingRight: 45, paddingHorizontal: 15 }}
                    />
                    <View style={{ position: "absolute", right: 40, display: "flex", alignItems: "center", justifyContent: "center", height: 55 }}>
                        <Search
                            width={22}
                            height={22}
                        />
                    </View>
                </View>
                {filteredLocations.length > 0 && (
                    <FlatList
                        data={filteredLocations}
                        keyExtractor={(item) => item.place_id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelectLocation(item)}>
                                <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#E8E8E8" }}>{item.display_name}</Text>
                            </TouchableOpacity>
                        )}
                        style={{ backgroundColor: "#FFF", borderRadius: 10, marginTop: 10, maxHeight: 150, elevation: 5 }}
                    />
                )}
            </SafeAreaView>
        </View>
    );
};

export default SearchScreen;
