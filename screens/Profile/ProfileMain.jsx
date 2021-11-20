import React, { useState } from 'react'
import { Button, Text, View } from "react-native";
import { isUserAuthenticated, logout } from '../../services/auth.service';
import Login from '../Login';
import UserProfile from './UserProfile/UserProfile';

export const ProfileMain = ({navigation}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();

    isUserAuthenticated().then(result => {
        setIsAuthenticated(result);
    })
    //Caso o usuário esteja autenticado, deverá ser mostrada a tela de perfil. Se não, deverá ser mostrado o login
    const ComponentToRender = isAuthenticated ? UserProfile : Login
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {<ComponentToRender />}
        </View>
    );
}
export default ProfileMain;