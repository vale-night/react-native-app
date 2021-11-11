import React from 'react'
import {Text, View} from "react-native";
import MapWrapper from "../components/MapWrapper";

export const Home = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MapWrapper />
            <Text>Home</Text>
        </View>
    );
}

export default Home;