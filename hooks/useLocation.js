import React, {useEffect} from 'react';
import * as Location from 'expo-location';
export default function useLocation(){
    const [location, setLocation] = React.useState();

    useEffect(() => {
        (async () => {
            await fetchLocation();
        })();
    }, []);

    const requestPermission = React.useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
        }
    }, []);

    const fetchLocation = React.useCallback(async () => {
        await requestPermission();

        let {coords} = await Location.getCurrentPositionAsync({});
        setLocation(coords);
    }, []);


    return {
        location,
    }
}