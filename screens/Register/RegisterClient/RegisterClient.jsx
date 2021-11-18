import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, ToastAndroid } from "react-native";
import PasswordInput from "../../../components/forms/PasswordInput";
import StyledButton from "../../../components/StyledButton";
import AppDefaultStyles from "../../../constants/AppDefaultStyles";
import { saveUser } from "../../../services/user.service";

const RegisterClient = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const onRegisterPress = () => {
        if(password !== passwordConfirmation) {
            Alert.alert('As senhas não são iguais! Por favor verifique!');
            return;
        }
        const user = {
            name,
            email,
            password
        }
        saveUser(user)
            .then(result => {
                if(!result.success)
                    throw 'Usuário não pode ser salvo com sucesso';
                ToastAndroid.showWithGravity('Autenticado com sucesso', 500, ToastAndroid.CENTER);
            })
            .catch(error => {
                ToastAndroid.showWithGravity(`Ocorreu um erro: ${error}`, 500, ToastAndroid.CENTER);
                console.error(error)
            });
    }
    return (
        <View style={AppDefaultStyles.container}>
            <Text style={AppDefaultStyles.heading}>
                Crie sua conta
            </Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='Nome completo'
                    style={AppDefaultStyles.input}
                    placeholderTextColor={AppDefaultStyles.primaryColor}
                    textContentType='name'
                    underlineColor='transparent'
                    onChangeText={(text) => setName(text)}
                 />
                <TextInput
                    placeholder='E-mail'
                    style={AppDefaultStyles.input}
                    placeholderTextColor={AppDefaultStyles.primaryColor}
                    textContentType='emailAddress'
                    underlineColor='transparent'
                    onChangeText={(text) => setEmail(text)}
                 />
                <PasswordInput 
                    onChangeText={(text) => setPassword(text)}
                />
                 <PasswordInput 
                    placeholder='Confirmar Senha'
                    onChangeText={(text) => setPasswordConfirmation(text)}
                />
            </View>
            <StyledButton 
                buttonText="Criar conta"
                onPress={onRegisterPress}
            />
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
        color: AppDefaultStyles.primaryColor,
        fontSize: 26,
        marginTop: 30,
        marginBottom: 30,
    },
    form: {
        maxHeight: 350,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        color: AppDefaultStyles.primaryColor,
        borderColor: AppDefaultStyles.primaryColor,
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
        backgroundColor: AppDefaultStyles.primaryColor
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
});


export default RegisterClient;