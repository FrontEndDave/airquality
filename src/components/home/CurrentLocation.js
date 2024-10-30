import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import CurrentLocationCard from "./CurrentLocationCard";

const CurrentLocation = () => {
    const { t } = useTranslation();
    const { address } = useContext(LocationContext);
    const { weather } = useContext(WeatherContext);

    return (
        <View style={{ marginTop: 40, paddingBottom: 50 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 15 }}>
                <Text style={{ fontFamily: "Medium", fontSize: 20 }}>{t("currentLocation")}</Text>
            </View>
            <CurrentLocationCard
                address={address}
                weather={weather}
            />
        </View>
    );
};

export default CurrentLocation;
