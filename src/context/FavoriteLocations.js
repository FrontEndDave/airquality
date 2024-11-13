import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SavedLocationsContext = createContext();

export const SavedLocationsProvider = ({ children }) => {
    const [savedLocations, setSavedLocations] = useState([]);

    useEffect(() => {
        loadSavedLocations();
    }, []);

    const loadSavedLocations = async () => {
        try {
            const storedLocations = await AsyncStorage.getItem("savedLocations");
            const locations = storedLocations ? JSON.parse(storedLocations) : [];
            setSavedLocations(locations);
        } catch (error) {}
    };

    const addLocation = async (name, country, coordinates) => {
        const locationExists = savedLocations.some((location) => location.name === name || (location.coordinates.latitude === coordinates.latitude && location.coordinates.longitude === coordinates.longitude));

        if (locationExists) {
            return;
        }

        if (savedLocations.length >= 5) {
            return;
        }

        const newLocation = { name, country, coordinates };
        const updatedLocations = [...savedLocations, newLocation];
        setSavedLocations(updatedLocations);
        await AsyncStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
    };

    const removeLocation = async (coordinates) => {
        const updatedLocations = savedLocations.filter((location) => location.coordinates.latitude !== coordinates.latitude || location.coordinates.longitude !== coordinates.longitude);

        setSavedLocations(updatedLocations);
        await AsyncStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
    };

    const clearSavedLocations = async () => {
        try {
            await AsyncStorage.removeItem("savedLocations");
            setSavedLocations([]);
        } catch (error) {
            console.error("Error clearing saved locations:", error);
        }
    };

    return <SavedLocationsContext.Provider value={{ savedLocations, addLocation, removeLocation, clearSavedLocations }}>{children}</SavedLocationsContext.Provider>;
};

export default SavedLocationsContext;
