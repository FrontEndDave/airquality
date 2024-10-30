import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";
import HealthIcon from "../../assets/svg/health";

const HealthTips = () => {
    const { weather } = useContext(WeatherContext);
    const { t } = useTranslation();
    const airQualityIndex = weather.current.air_quality["us-epa-index"];
    const tipsForCurrentAQI = t(`healthTips.${airQualityIndex - 1}.tips`, { returnObjects: true });

    return (
        <View style={{ paddingHorizontal: 25, width: "100%" }}>
            <View style={{ backgroundColor: "#E8E8E8", borderRadius: 20, marginTop: 15, padding: 15, overflow: "hidden", width: "100%" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, paddingBottom: 15 }}>
                    <HealthIcon
                        width={30}
                        height={30}
                    />
                    <Text style={{ fontFamily: "Regular", fontSize: 18, color: "#75879b" }}>{t("healthTipsTitle")}</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "col", gap: 15, width: "90%" }}>
                    {tipsForCurrentAQI &&
                        tipsForCurrentAQI.map((tip) => (
                            <View
                                key={tip.id}
                                style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 15, paddingLeft: 0 }}>
                                <View style={{ width: 8, height: 8, backgroundColor: "#4d4d4d", borderRadius: "100%" }} />
                                <Text style={{ fontFamily: "Regular", fontSize: 17, color: "#4d4d4d", width: "100%" }}>{tip.text}</Text>
                            </View>
                        ))}
                </View>
            </View>
        </View>
    );
};

export default HealthTips;
