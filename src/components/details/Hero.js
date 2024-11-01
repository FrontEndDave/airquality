import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackIcon from "../../assets/svg/backIcon";
import WeatherContext from "../../context/WeatherContext";
import AddIcon from "../../assets/svg/add";

const Hero = ({ name, saveIcon }) => {
    const navigation = useNavigation();
    const { weather } = useContext(WeatherContext);

    const currentTemprature = weather?.current?.temp_c;
    const feelLikeTemprature = weather?.current?.feelslike_c;

    const hadleSaveLocation = () => {
        console.log("Save location", name);
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 25 }}>
            {saveIcon === true ? (
                <View style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "row", marginTop: 15, paddingBottom: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{name}</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#4d4d4d" }}>
                            {currentTemprature.toFixed(0)}° | Temperatura odczuwalna: {feelLikeTemprature.toFixed(0)}°
                        </Text>
                    </View>
                    <TouchableOpacity onPress={hadleSaveLocation}>
                        <AddIcon
                            color='#000'
                            width={36}
                            height={36}
                        />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 15, paddingBottom: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}>
                        <BackIcon
                            color='#000'
                            width={30}
                            height={30}
                        />
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 24 }}>{name}</Text>
                        <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#4d4d4d" }}>
                            {currentTemprature.toFixed(0)}° | Temperatura odczuwalna: {feelLikeTemprature.toFixed(0)}°
                        </Text>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Hero;
