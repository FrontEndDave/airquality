import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import * as Notifications from "expo-notifications";
import { API_KEY } from "../constants";

const BACKGROUND_FETCH_TASK = "background-fetch";

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async (taskData) => {
    const { latitude, longitude } = taskData.data;

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=yes&alerts=no`);
        const data = await response.json();

        const aqi = data.current.air_quality["us-epa-index"];

        if (aqi >= 4) {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Uwaga! Wysoka jakość powietrza",
                    body: `AQI wynosi ${aqi}. Zaleca się unikanie aktywności na świeżym powietrzu.`,
                },
                trigger: null,
            });
        }
    } catch (error) {}

    return BackgroundFetch.BackgroundFetchResult.NewData;
});

export const registerBackgroundFetchAsync = async (latitude, longitude) => {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 30,
        stopOnTerminate: false,
        startOnBoot: true,
        taskData: { latitude, longitude },
    });
};

export const unregisterBackgroundFetchAsync = async () => {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
};

export const checkBackgroundFetchStatus = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);

    return { status, isRegistered };
};
