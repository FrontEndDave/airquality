import React, { useState } from "react";
import axios from "axios";

const WeatherContext = React.createContext();

import { API_KEY } from "../constants/index";

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

    const getWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=yes&alerts=no`);
            setWeather(response.data);
        } catch (error) {
            console.error("Błąd podczas pobierania aktualnej pogody:", error);
        }
    };

    return <WeatherContext.Provider value={{ weather, getWeather }}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;
