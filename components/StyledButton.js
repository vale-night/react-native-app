import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppDefaultStyles from '../constants/AppDefaultStyles';

const StyledButton = ({ buttonText, buttonStyles = AppDefaultStyles.primaryButton, buttonTextStyles = AppDefaultStyles.buttonText, onPress }) => {
    return (
        <TouchableOpacity
            style={{ ...buttonStyles }}
            onPress={onPress}
        >
            <Text style={buttonTextStyles}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default StyledButton;