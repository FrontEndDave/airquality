import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
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
    const { address, coordinates } = props.route.params;

    console.log(address);

    const [refreshing, setRefreshing] = React.useState(false);
    const { currentLocation } = useContext(LocationContext);
    const { getWeather } = useContext(WeatherContext);

    useEffect(() => {
        if (coordinates) {
            getWeather(coordinates.latitude, coordinates.longitude);
        } else if (currentLocation) {
            getWeather(currentLocation.latitude, currentLocation.longitude);
        }
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            if (coordinates) {
                getWeather(coordinates.latitude, coordinates.longitude);
            } else if (currentLocation) {
                getWeather(currentLocation.latitude, currentLocation.longitude);
            }
        }, 2000);
    }, []);

    return (
        <>
            <StatusBar barStyle='dark' />
            <Hero
                name={props.route.params.address ? props.route.params.address : props.route.params.place}
                saveIcon={props.route.params.address ? true : false}
            />
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
                <PlaceLocation
                    currentLocation={currentLocation}
                    coordinates={coordinates}
                />
            </ScrollView>
        </>
    );
};

export default LocationDetailsScreen;
