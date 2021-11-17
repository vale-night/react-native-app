import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView, TouchableOpacity, ToastAndroid, Alert } from "react-native";
import AppStyles from '../constants/AppStyles';
import { login } from '../services/auth.service';

export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const onLoginPress = () => {
        login(username, password).then((result) => {
            console.log(result.auth);
            if(!result.auth)
                throw 'Não foi possível autenticar';
            ToastAndroid.showWithGravity('Autenticado com sucesso', 500, ToastAndroid.CENTER);

        }).catch(error => {
            ToastAndroid.showWithGravity(`Ocorreu um erro: ${error}`, 500, ToastAndroid.CENTER);
            console.error(error)
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='E-mail'
                    style={styles.input}
                    placeholderTextColor={AppStyles.primaryColor}
                    textContentType='emailAddress'
                    underlineColor='transparent'
                    onChangeText={(text) => setUsername(text)}
                 />
                <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor={AppStyles.primaryColor}
                    textContentType='password'
                    underlineColor='transparent'
                    onChangeText={(text) => setPassword(text)}
                 />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={{...styles.button, backgroundColor: AppStyles.secondaryColor}}
                >
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>
                <Text>OU</Text>
                <TouchableOpacity
                    style={{...styles.button, backgroundColor: AppStyles.primaryColor}}
                    onPress={onLoginPress}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heading: {
        color: AppStyles.primaryColor,
        fontSize: 26,
        marginTop: 30,
        marginBottom: 30,
    },
    form: {
        maxHeight: 150,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        color: AppStyles.primaryColor,
        borderColor: AppStyles.primaryColor,
        width: 340,
        height: 59,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#FFF'
    },
    buttons: {
        maxHeight: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 59,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
});

export default Login;