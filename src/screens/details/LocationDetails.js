import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import Header from "../../components/common/Header";
import Hero from "../../components/details/Hero";
import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import AirQualityCard from "../../components/details/AirQualityCard";
import PlaceLocation from "../../components/details/PlaceLocation";
import HealthTips from "../../components/details/HealthTips";
import PMCard from "../../components/details/PMCard";
import PollutantCard from "../../components/details/PollutantCard";
import AirQualityForecast from "../../components/details/AirQualityForecast";

const LocationDetailsScreen = (props) => {
    const { address } = props.route.params;
    const [refreshing, setRefreshing] = React.useState(false);
    const { currentLocation } = useContext(LocationContext);
    const { getWeather } = useContext(WeatherContext);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            if (currentLocation) {
                getWeather(currentLocation.latitude, currentLocation.longitude);
            }
        }, 2000);
    }, []);

    return (
        <>
            <StatusBar barStyle='dark' />
            <Hero name={address.city} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                style={{ backgroundColor: "#F3F3F3" }}>
                <AirQualityCard />
                <PMCard />
                <PollutantCard />
                <HealthTips />
                <AirQualityForecast />
                <PlaceLocation currentLocation={currentLocation} />
            </ScrollView>
        </>
    );
};

export default LocationDetailsScreen;
