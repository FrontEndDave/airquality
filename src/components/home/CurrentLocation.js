import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import LocationContext from "../../context/LocationContext";
import CurrentLocationCard from "./CurrentLocationCard";

const CurrentLocation = () => {
    const { t } = useTranslation();
    const { address } = useContext(LocationContext);

    return (
        <View style={{ marginTop: 40, paddingHorizontal: 25, paddingBottom: 150 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 15 }}>
                <Text style={{ fontFamily: "Medium", fontSize: 20 }}>{t("currentLocation")}</Text>
            </View>
            <CurrentLocationCard address={address} />
        </View>
    );
};

export default CurrentLocation;
