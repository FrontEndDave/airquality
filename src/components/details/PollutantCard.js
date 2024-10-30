import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Text, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";

const PollutantCard = () => {
    const { weather } = useContext(WeatherContext);
    const no2 = weather.current.air_quality.no2;
    const o3 = weather.current.air_quality.o3;
    const co = weather.current.air_quality.co;
    const so2 = weather.current.air_quality.so2;

    const NO2DotPosition = (no2 / 300) * 100;
    const O3DotPosition = (o3 / 240) * 100;
    const SO2DotPosition = (so2 / 500) * 100;
    const CODotPosition = (co / 10000) * 100;

    return (
        <View style={{ paddingHorizontal: 25, width: "100%" }}>
            <View style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, gap: 15, backgroundColor: "#E8E8E8", display: "flex", flexDirection: "row", borderRadius: 20 }}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                NO
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>2</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{no2.toFixed(1)}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                O<Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>3</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{o3.toFixed(1)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 15, backgroundColor: "#E8E8E8", display: "flex", flexDirection: "row", borderRadius: 20 }}>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>
                                SO
                                <Text style={{ fontFamily: "Medium", fontSize: 15, color: "#75879b" }}>2</Text>
                            </Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{so2.toFixed(1)}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: "Regular", fontSize: 20, color: "#75879b" }}>CO</Text>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 32, color: "#4d4d4d" }}>{co.toFixed(1)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PollutantCard;
