import React from "react";
import { View, Text } from "react-native";
import AppDefaultStyles from "../../../constants/AppDefaultStyles";

const RegisterOrganizer = () => {
    return (
        <View style={AppDefaultStyles.container}>
            <Text style={AppDefaultStyles.heading}>
                Cadastrando organizador
            </Text>
        </View>
    );
}

export default RegisterOrganizer;