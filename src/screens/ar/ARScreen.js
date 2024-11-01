import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, SafeAreaView } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import WeatherContext from "../../context/WeatherContext";

import BackIcon from "../../assets/svg/backIcon";
import { useNavigation } from "@react-navigation/native";

function getAqiBackgroundStyle(aqi) {
    switch (aqi) {
        case 1:
            return { backgroundColor: "rgba(255, 255, 255, 0.0)" };
        case 2:
            return { backgroundColor: "rgba(50, 50, 50, 0.1)" };
        case 3:
            return { backgroundColor: "rgba(50, 50, 50, 0.35)" };
        case 4:
            return { backgroundColor: "rgba(50, 50, 50, 0.5)" };
        case 5:
            return { backgroundColor: "rgba(50, 50, 50, 0.7)" };
        default:
            return { backgroundColor: "rgba(255, 255, 255, 0.0)" };
    }
}

const ARScreen = () => {
    const navigation = useNavigation();
    const { weather } = useContext(WeatherContext);
    const [aqi, setAqi] = useState(1);
    const [pm10, setPm10] = useState(0);
    const [pm25, setPm25] = useState(0);
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        if (weather && weather.current) {
            const airQuality = weather.current.air_quality;
            setAqi(airQuality["us-epa-index"] || 1);
            setPm10(airQuality["pm10"] || 0);
            setPm25(airQuality["pm2_5"] || 0);
        }
    }, [weather]);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Potrzebujemy twojej zgody na dostęp do kamery</Text>
                <Button
                    onPress={requestPermission}
                    title='Zezwól na dostęp do kamery'
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <CameraView
                style={{ flex: 1 }}
                type={"back"}>
                <View style={[styles.background, getAqiBackgroundStyle(aqi)]} />

                <SafeAreaView style={{ width: "100%", marginHorizontal: 25, display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{}}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                </SafeAreaView>

                <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 30 }}>
                    <Text style={{ fontFamily: "SemiBold", color: "#fff", fontSize: 16, paddingBottom: 5 }}>
                        AQI: {aqi} - Jakość powietrza: {getAqiDescription(aqi)}
                    </Text>
                    <Text style={{ fontFamily: "Regular", color: "#fff", fontSize: 15 }}>PM10: {pm10} µg/m³</Text>
                    <Text style={{ fontFamily: "Regular", color: "#fff", fontSize: 15 }}>PM2.5: {pm25} µg/m³</Text>
                </View>
            </CameraView>
        </View>
    );
};

function getAqiDescription(aqi) {
    switch (aqi) {
        case 1:
            return "Bardzo dobra";
        case 2:
            return "Dobra";
        case 3:
            return "Umiarkowana";
        case 4:
            return "Zła";
        case 5:
            return "Bardzo zła";
        default:
            return "Brak danych";
    }
}

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
    },
});

export default ARScreen;
