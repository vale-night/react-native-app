import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView, TouchableOpacity, ToastAndroid, Alert } from "react-native";
import PasswordInput from '../components/forms/PasswordInput';
import StyledButton from '../components/StyledButton';
import AppDefaultStyles from '../constants/AppDefaultStyles';
import { login } from '../services/auth.service';

export const Login = ({navigation}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const onLoginPress = () => {
        login(username, password).then((result) => {
            if(!result.auth)
                throw 'Não foi possível autenticar';
            ToastAndroid.showWithGravity('Autenticado com sucesso', 500, ToastAndroid.CENTER);

        }).catch(error => {
            ToastAndroid.showWithGravity(`Ocorreu um erro: ${error}`, 500, ToastAndroid.CENTER);
            console.error(error)
        });
    }

    return (
        <View style={AppDefaultStyles.container}>
            <Text style={AppDefaultStyles.heading}>Login</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='E-mail'
                    style={AppDefaultStyles.input}
                    placeholderTextColor={AppDefaultStyles.primaryColor}
                    textContentType='emailAddress'
                    underlineColor='transparent'
                    onChangeText={(text) => setUsername(text)}
                 />
                <PasswordInput 
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.buttons}>
                <StyledButton
                    buttonText='Cadastre-se'
                    buttonStyles={AppDefaultStyles.secondaryButton}
                    onPress={() => navigation.navigate('_Register')}
                />
                <Text>OU</Text>
                <StyledButton
                    buttonText='Entrar'
                    onPress={onLoginPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        maxHeight: 150,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttons: {
        maxHeight: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Login;