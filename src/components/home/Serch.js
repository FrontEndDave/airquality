import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Search from "../../assets/svg/search";

const SearchInput = () => {
    return (
        <TouchableOpacity
            // onPress={() => navigation.push("Search")}
            style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", marginHorizontal: 25 }}>
            <View style={{ width: "100%", height: 55, backgroundColor: "#E8E8E8", borderRadius: 15, marginTop: 30, paddingHorizontal: 15, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Text style={{ color: "#bbbbbd", fontSize: 16 }}>Wyszukaj lokalizację</Text>
            </View>
            <View style={{ position: "absolute", right: 15, display: "flex", alignItems: "center", justifyContent: "center", height: 55 }}>
                <Search
                    width={22}
                    height={22}
                />
            </View>
        </TouchableOpacity>
    );
};

export default SearchInput;
