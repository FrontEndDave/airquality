import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const FavoriteLocations = () => {
    const { t } = useTranslation();

    return (
        <View style={{ marginTop: 40 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 25, paddingHorizontal: 25 }}>
                <Text style={{ fontFamily: "Medium", fontSize: 20 }}>{t("savedLocations")}</Text>
                <TouchableOpacity>
                    <Text style={{ fontFamily: "medium", fontSize: 18, color: "#BABABA" }}>{t("seeMore")}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style={{ marginLeft: 25 }}
                horizontal
                pagingEnabled
                snapToInterval={156}
                decelerationRate='fast'
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{ width: 186, backgroundColor: "#E8E8E8", height: 246, borderRadius: 20, marginRight: 20 }}></View>
                <View style={{ width: 186, backgroundColor: "#E8E8E8", height: 246, borderRadius: 20, marginRight: 20 }}></View>
                <View style={{ width: 186, backgroundColor: "#E8E8E8", height: 246, borderRadius: 20, marginRight: 20 }}></View>
                <View style={{ width: 186, backgroundColor: "#E8E8E8", height: 246, borderRadius: 20, marginRight: 25 }}></View>
            </ScrollView>
        </View>
    );
};

export default FavoriteLocations;
