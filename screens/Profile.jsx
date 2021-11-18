import React, { useState } from 'react'
import { Button, Text, View } from "react-native";
import { isUserAuthenticated, logout } from '../services/auth.service';
import Login from './Login';

export const Profile = ({navigation}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    isUserAuthenticated(result => {
        setIsAuthenticated(result);
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Login navigation={navigation}/>
            {/* {!isAuthenticated && //Renderização condicional pendente de implementação
                <Login />
            } */}
            {/* {isAuthenticated && UserProfileComponent()} */}
        </View>
    );
}

const UserProfileComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Usuário autenticado! Tela do perfil pendente de implementação</Text>
            <Button
                title="Deslogar"
                onPress={async () => await logout()}
             />
        </View>
    )
}

export default Profile;