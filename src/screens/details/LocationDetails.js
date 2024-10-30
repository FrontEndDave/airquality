import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { RefreshControl, ScrollView } from "react-native";

import Header from "../../components/common/Header";
import Hero from "../../components/details/Hero";
import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import AirQualityCard from "../../components/details/AirQualityCard";
import PlaceLocation from "../../components/details/PlaceLocation";
import HealthTips from "../../components/details/HealthTips";
import PMCard from "../../components/details/PMCard";

const LocationDetailsScreen = (props) => {
    const { address, weather } = props.route.params;

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
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                style={{ backgroundColor: "#F3F3F3", paddingHorizontal: 25 }}>
                <Hero name={address.city} />
                <AirQualityCard weather={weather} />
                <PMCard weather={weather} />
                <HealthTips weather={weather} />
                <PlaceLocation currentLocation={currentLocation} />
            </ScrollView>
        </>
    );
};

export default LocationDetailsScreen;
