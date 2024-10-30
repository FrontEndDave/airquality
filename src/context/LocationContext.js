import * as Location from "expo-location";
import React, { useEffect, useState } from "react";

const LocationContext = React.createContext();

export const LocationProvider = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [address, setAddress] = useState({
        city: "",
        region: "",
        country: "",
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
                let location = await Location.getCurrentPositionAsync({});
                setCurrentLocation(location.coords);
                const { latitude, longitude } = location.coords;

                let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
                if (reverseGeocode.length > 0) {
                    const place = reverseGeocode[0];
                    setAddress({
                        city: place.city,
                        region: place.region,
                        country: place.country,
                    });
                }
            }
        })();
    }, []);

    return <LocationContext.Provider value={{ currentLocation, address }}>{children}</LocationContext.Provider>;
};

export default LocationContext;
