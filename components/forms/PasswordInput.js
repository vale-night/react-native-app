import React, { useState } from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import AppDefaultStyles from '../../constants/AppDefaultStyles';

const PasswordInput = ({ placeholder = 'Senha', style = AppDefaultStyles.input, onChangeText }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <View style={styles.passwordContainer}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={hidePassword}
                style={AppDefaultStyles.input}
                placeholderTextColor={AppDefaultStyles.primaryColor}
                textContentType='password'
                underlineColor='transparent'
                onChangeText={onChangeText}
            />
            <Entypo 
                name={hidePassword ? 'eye-with-line' : 'eye'} 
                style={styles.icon}
                size={20} 
                color={AppDefaultStyles.secondaryColor} 
                onPress={() => setHidePassword(!hidePassword)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        position:'absolute',
        right: 10
    }
});

export default PasswordInput;