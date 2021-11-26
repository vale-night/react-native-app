import React from 'react';
import { Button, StyleSheet, Text, ToastAndroid, View } from "react-native";
import AppDefaultStyles from '../../../constants/AppDefaultStyles';
import { logout } from '../../../services/auth.service';
import UserProfileInfo from './UserProfileInfo';
import UserProfileMenuList from './UserProfileMenuList';

const UserProfile = ({navigation}) => {

    const showComingSoonMessage = () => ToastAndroid.showWithGravity('Em breve!', 700, ToastAndroid.CENTER);

    const firstMenuItems = [
        {
            iconName: 'list', 
            text: 'Pedidos',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'user-circle', 
            text: 'Dados Pessoais',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'credit-card', 
            text: 'Informações de Pagamento',
            onPress: () => showComingSoonMessage()
        },
    ];

    const secondMenuItems = [
        {
            iconName: 'send', 
            text: 'Convidar amigos',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'file-text', 
            text: 'Termos de Uso e Privacidade',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'star', 
            text: 'Avalie nosso aplicativo!',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'star', 
            text: 'Escreva uma sugestão',
            onPress: () => showComingSoonMessage()
        },
        {
            iconName: 'sign-out', 
            text: 'Deslogar',
            onPress: () => {
                logout()
                    .then(result => {
                        ToastAndroid.showWithGravity('Deslogado com sucesso!', 700, ToastAndroid.CENTER);
                        navigation.navigate('_Login', {
                            isAuthenticated: false
                        })
                    })
                    .catch(err => ToastAndroid.showWithGravity(`Erro ao deslogar! ${err}`, 700, ToastAndroid.CENTER))
            }
        },
    ];
    return (
        <View style={AppDefaultStyles.container}>
            <UserProfileInfo
                parentStyles={styles.item}
                navigation={navigation} />
            <UserProfileMenuList 
                menuItems={firstMenuItems}
                parentStyles={styles.item}
            />
            <UserProfileMenuList 
                menuItems={secondMenuItems}
                parentStyles={styles.item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 10
    }
});


export default UserProfile;