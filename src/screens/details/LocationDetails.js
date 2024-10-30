import React, { useContext } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";

import FavoriteLocations from "../../components/home/FavoriteLocations";
import SearchInput from "../../components/home/Serch";
import CurrentLocation from "../../components/home/CurrentLocation";
import Hero from "../../components/home/Hero";
import WeatherContext from "../../context/WeatherContext";
import LocationContext from "../../context/LocationContext";

const LocationDetailsScreen = () => {
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                style={{ backgroundColor: "#F3F3F3" }}>
                <Hero />
                {/* <SearchInput />
                <FavoriteLocations />
                <CurrentLocation /> */}
            </ScrollView>
        </>
    );
};

export default LocationDetailsScreen;
