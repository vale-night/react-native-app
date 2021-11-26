import React from 'react';
import MapView, {Marker} from "react-native-maps";
import {StyleSheet, View, Text} from "react-native";
import useLocation from '../hooks/useLocation';

export const MapWrapper = () => {

    const { location } = useLocation();

    return (
        <>
            {location && <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.005,
                    }}
                >
                <Marker coordinate={location}  />
            </MapView>
            }
        </>

    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
});

export default MapWrapper;