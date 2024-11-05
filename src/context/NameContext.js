import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const [username, setUsername] = useState("User");

    const loadUsername = async () => {
        try {
            const savedUsername = await AsyncStorage.getItem("userName");
            if (savedUsername) {
                setUsername(savedUsername);
            }
        } catch (error) {
            console.error("Error loading user name:", error);
        }
    };

    const updateUsername = async (newUsername) => {
        try {
            await AsyncStorage.setItem("userName", newUsername);
            setUsername(newUsername);
        } catch (error) {
            console.error("Error saving user name:", error);
        }
    };

    useEffect(() => {
        loadUsername();
    }, []);

    return <NameContext.Provider value={{ username, updateUsername }}>{children}</NameContext.Provider>;
};
