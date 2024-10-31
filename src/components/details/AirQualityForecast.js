import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import WeatherContext from "../../context/WeatherContext";

import { ScrollView } from "react-native-gesture-handler";

const AirQualityForecast = () => {
    const { weather } = useContext(WeatherContext);
    const { t } = useTranslation();

    const currentHour = new Date().getHours();
    const hoursLeftInDay = 24 - currentHour;
    const hoursToDisplay = Math.min(hoursLeftInDay, 24);

    const todayForecast = weather.forecast.forecastday[0].hour;
    const nextDaysForecast = weather.forecast.forecastday.slice(1);

    const filteredTodayForecast = todayForecast.filter((hourData) => hourData.air_quality["us-epa-index"]);
    const filteredNextDaysForecast = nextDaysForecast.filter((day) => day.day.air_quality["us-epa-index"]);

    return (
        <View style={{ width: "100%", marginTop: 15, paddingLeft: 25 }}>
            <ScrollView
                horizontal
                pagingEnabled
                snapToInterval={156}
                decelerationRate='fast'
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}>
                {filteredTodayForecast.slice(currentHour, currentHour + hoursToDisplay).map((hourData, index) => (
                    <View
                        key={index}
                        style={{ width: 170, padding: 10, backgroundColor: "#E8E8E8", borderRadius: 10, marginRight: 10 }}>
                        <Text style={{ fontFamily: "SemiBold", fontSize: 22, color: "#75879b" }}>{hourData.time.split(" ")[1]}</Text>
                        <Text style={{ fontFamily: "Regular", color: "#4d4d4d", fontSize: 15 }}>
                            {t("aqiShortcut")}: <Text style={{ fontFamily: "Bold", fontSize: 16 }}>{hourData.air_quality["us-epa-index"]}</Text>
                        </Text>
                    </View>
                ))}

                {filteredNextDaysForecast.map((day, index) =>
                    day.day.air_quality["us-epa-index"] ? (
                        <View
                            key={index}
                            style={{
                                width: 170,
                                padding: 10,
                                backgroundColor: "#E8E8E8",
                                borderRadius: 10,
                                marginRight: index === filteredNextDaysForecast.length - 1 ? 25 : 10,
                            }}>
                            <Text style={{ fontFamily: "SemiBold", fontSize: 22, color: "#75879b" }}>{day.date}</Text>
                            <Text style={{ fontFamily: "Regular", color: "#4d4d4d", fontSize: 15 }}>
                                {t("aqiShortcut")}: <Text style={{ fontFamily: "Bold", fontSize: 16 }}>{day.day.air_quality["us-epa-index"]}</Text>
                            </Text>
                        </View>
                    ) : null
                )}
            </ScrollView>
        </View>
    );
};

export default AirQualityForecast;
