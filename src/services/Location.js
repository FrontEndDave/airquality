import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const LOCATION_TASK_NAME = "background-location-task";

TaskManager.defineTask(LOCATION_TASK_NAME, async () => {
    try {
        const { coords } = await Location.getCurrentPositionAsync({});
        const aqiValue = await getAQI(coords.latitude, coords.longitude);

        if (aqiValue > 4) {
            await sendNotification(aqiValue);
        }
    } catch (error) {
        console.error("Error in background location task:", error);
    }
});

export const requestLocationPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.warn("Location permission not granted");
        return false;
    }
    return true;
};

export const startBackgroundAQIUpdates = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.High,
        timeInterval: 300000,
        distanceInterval: 0,
    });
};

export const getCurrentLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({});
    return coords;
};

export const getAQI = async (latitude, longitude, getWeather) => {
    await getWeather(latitude, longitude);

    if (!weather.current || !weather.current.air_quality) {
        return null;
    }

    return weather.current.air_quality["us-epa-index"];
};

const sendNotification = async (aqiValue) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Uwaga!",
            body: `AQI przekroczył poziom 4: ${aqiValue}`,
            data: { data: "goes here" },
        },
        trigger: null,
    });
};
