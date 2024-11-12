import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { RefreshControl, ScrollView } from "react-native";

import Header from "../../components/common/Header";
import CurrentLocation from "../../components/home/CurrentLocation";
import FavoriteLocations from "../../components/home/FavoriteLocations";
import Hero from "../../components/home/Hero";
import SearchInput from "../../components/home/Serch";
import LocationContext from "../../context/LocationContext";
import WeatherContext from "../../context/WeatherContext";
import Footer from "../../components/common/Footer";

const HomeScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const { currentLocation } = useContext(LocationContext);
    const { getCurrentLocationWeather } = useContext(WeatherContext);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            if (currentLocation) {
                getCurrentLocationWeather(currentLocation.latitude, currentLocation.longitude);
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
                style={{ backgroundColor: "#F3F3F3" }}>
                <Hero />
                <SearchInput />
                <FavoriteLocations currentLocation={currentLocation ? true : false} />
                {currentLocation && <CurrentLocation />}
            </ScrollView>
            <Footer active='home' />
        </>
    );
};

export default HomeScreen;
