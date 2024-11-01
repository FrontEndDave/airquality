import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PinIcon from "../../assets/svg/pin";
import { useTranslation } from "react-i18next";

const PlaceLocation = ({ currentLocation, coordinates }) => {
    if (!currentLocation) return null;
    const { t } = useTranslation();

    const initialRegion = {
        latitude: coordinates ? coordinates.latitude : currentLocation.latitude,
        longitude: coordinates ? coordinates.longitude : currentLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const [region, setRegion] = useState(initialRegion);

    const handleZoomIn = () => {
        const newRegion = {
            ...region,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2,
        };
        setRegion(newRegion);
    };

    const handleZoomOut = () => {
        const newRegion = {
            ...region,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2,
        };
        setRegion(newRegion);
    };

    return (
        <View style={{ marginTop: 30, paddingHorizontal: 25, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", paddingBottom: 25, position: "relative" }}>
            <MapView
                style={{ width: "100%", height: 160, borderRadius: 25 }}
                region={region}
                onRegionChangeComplete={setRegion}>
                <Marker coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}>
                    <View style={{ position: "relative" }}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#fff", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <PinIcon
                                width={34}
                                height={34}
                                color='#2AB8A0'
                            />
                        </View>
                        <View
                            style={{
                                position: "absolute",
                                bottom: -5,
                                alignSelf: "center",
                                width: 0,
                                height: 0,
                                borderLeftWidth: 10,
                                borderRightWidth: 10,
                                borderBottomWidth: 10,
                                borderStyle: "solid",
                                borderLeftColor: "transparent",
                                borderRightColor: "transparent",
                                borderBottomColor: "#fff",
                                transform: [{ rotate: "180deg" }],
                            }}
                        />
                    </View>
                </Marker>
            </MapView>
            <View style={{ position: "absolute", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", top: 15, right: 40, paddingBottom: 15 }}>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", width: 40, height: 90, borderRadius: 10 }}>
                    <TouchableOpacity
                        onPress={handleZoomOut}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "regular", fontSize: 32, color: "#BABABA", textAlign: "center" }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleZoomIn}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "regular", fontSize: 32, color: "#000", textAlign: "center" }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PlaceLocation;
