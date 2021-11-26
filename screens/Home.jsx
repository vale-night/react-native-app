import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import MapWrapper from "../components/MapWrapper";

export const Home = () => {
    return(
        <View style={styles.container}>
            <MapWrapper />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;