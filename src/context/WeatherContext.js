import axios from "axios";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WeatherContext = React.createContext();

import { API_KEY } from "../constants/index";

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [currentLocationWeather, setCurrentLocationWeather] = useState(null);
    const [units, setUnits] = useState({ temperature: "celsius", speed: "km/h" });
    const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

    const loadUnits = async () => {
        try {
            const savedUnits = await AsyncStorage.getItem("units");
            if (savedUnits) {
                setUnits(JSON.parse(savedUnits));
            }
        } catch (error) {}
    };

    const saveUnits = async (newUnits) => {
        try {
            await AsyncStorage.setItem("units", JSON.stringify(newUnits));
        } catch (error) {}
    };

    const getWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${latitude},${longitude}&days=5&aqi=yes&alerts=no`);
            setWeather(response.data);
        } catch (error) {}
    };

    const getCurrentLocationWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${latitude},${longitude}&days=5&aqi=yes&alerts=no`);
            setCurrentLocationWeather(response.data);
        } catch (error) {}
    };

    const changeUnit = (type, value) => {
        const newUnits = { ...units, [type]: value };
        setUnits(newUnits);
        saveUnits(newUnits);
    };

    useEffect(() => {
        loadUnits();
    }, []);

    return <WeatherContext.Provider value={{ weather, currentLocationWeather, getWeather, getCurrentLocationWeather, units, changeUnit }}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;
