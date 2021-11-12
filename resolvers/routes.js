import React, {useState} from 'react';
import { Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import logo from '../assets/logo.png';
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { LogBox } from "react-native";


/**
 * @see https://reactnavigation.org/docs/tab-based-navigation/
 */



const HomeStack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="_Home" component={Home} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
};

const SettingsStack = createNativeStackNavigator();
const SettingsScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="_Settings" component={Settings} options={{ headerShown: false }} />
        </SettingsStack.Navigator>
    );
};

const SearchStack = createNativeStackNavigator();
const SearchScreen = () => {
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name="_Search" component={Search} options={{ headerShown: false }} />
        </SearchStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="_Profile" component={Profile} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

export default function Routes() {


    const [defaultNavigationOptions] = useState({
        headerTitle: (props) => ( // App Logo
            <Image
                style={{ width: Dimensions.get("screen").width/1.10, height: 50 }}
                source={logo}
                resizeMode='contain'
            />
        ),
        headerTitleStyle: {  justifyContent: 'center' }
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#FF6969',
                    tabBarInactiveTintColor: '#6F7888',

                })}
                initialRouteName="Home"
                barStyle={{ backgroundColor: '#fff' }}
            >
                <Tab.Screen name="Home"
                            component={HomeScreen}
                            options={{
                                ...defaultNavigationOptions,
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),

                            }}
                />

                <Tab.Screen name="Search"
                            component={SearchScreen}
                            options={{
                                tabBarLabel: 'Search',
                                ...defaultNavigationOptions,
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="map-search" color={color} size={26} />
                                ),
                            }}/>


                <Tab.Screen name="Profile"
                            component={ProfileScreen}
                            options={{
                                ...defaultNavigationOptions,
                                tabBarLabel: 'Perfil',
                                tabBarColor: '#f0edf6',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                                ),
                            }}/>

                <Tab.Screen name="Settings"
                            component={SettingsScreen}
                            options={{
                                ...defaultNavigationOptions,
                                tabBarLabel: 'Configurações',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="plus" color={color} size={26} />
                                ),
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}