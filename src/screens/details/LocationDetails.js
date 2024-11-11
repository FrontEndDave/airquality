import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { RefreshControl, ScrollView } from "react-native";

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
    const { address, country, coordinates } = props.route.params;

    const [refreshing, setRefreshing] = React.useState(false);
    const { currentLocation } = useContext(LocationContext);
    const { weather, getWeather } = useContext(WeatherContext);

    useEffect(() => {
        if (coordinates) {
            getWeather(coordinates.latitude, coordinates.longitude);
        } else if (currentLocation) {
            getWeather(currentLocation.latitude, currentLocation.longitude);
        }
    }, [coordinates, currentLocation, getWeather]);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        try {
            if (coordinates) {
                await getWeather(coordinates.latitude, coordinates.longitude);
            } else if (currentLocation) {
                await getWeather(currentLocation.latitude, currentLocation.longitude);
            }
        } finally {
            setRefreshing(false);
        }
    }, [coordinates, currentLocation, getWeather]);

    return (
        <>
            <StatusBar barStyle='dark' />
            <Hero
                name={address ? address : props.route.params.place}
                country={country ? country : null}
                coordinates={coordinates ? coordinates : null}
                saveIcon={address ? true : false}
                addIcon={props.route.params.addIcon ? props.route.params.addIcon : false}
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
