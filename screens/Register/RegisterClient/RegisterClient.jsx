import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppDefaultStyles from "../../../constants/AppDefaultStyles";

const RegisterClient = () => {
    return (
        <View style={AppDefaultStyles.container}>
            <Text style={AppDefaultStyles.heading}>
                Cadastrando cliente
            </Text>
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
        maxHeight: 150,
        marginBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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