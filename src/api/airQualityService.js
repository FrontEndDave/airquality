import axios from "axios";

const API_KEY = "5d5763b7e8d9cd60380b55be2252b8f6";
const API_URL = "http://api.openweathermap.org/data/2.5/air_pollution";

export const getAirQuality = async (latitude, longitude) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                lat: latitude,
                lon: longitude,
                appid: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Błąd podczas pobierania danych o jakości powietrza:", error);
        throw error;
    }
};
