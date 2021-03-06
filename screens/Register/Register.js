import React from 'react'
import { StyleSheet, Text,  ToastAndroid,  View } from "react-native";
import StyledButton from '../../components/StyledButton';
import AppDefaultStyles from '../../constants/AppDefaultStyles';

export const Register = ({navigation}) => {
    return (
        <View style={AppDefaultStyles.container}>
            <Text style={AppDefaultStyles.heading}>Você deseja se cadastrar...</Text>
            <View style={styles.buttons}>
                <StyledButton
                    buttonText='Como Organizador (em breve)'
                    style={AppDefaultStyles.secondaryButton}
                    // onPress={() => navigation.navigate('_RegisterOrganizer')}
                    onPress={() => ToastAndroid.showWithGravity('Em breve, cadastro de organizadores!', 700, ToastAndroid.CENTER)}
                />
                <Text>OU</Text>
                <StyledButton
                    buttonText='Como Cliente'
                    onPress={() => navigation.navigate('_RegisterClient')}
                />
            </View>
        </View>
    );
}
export default Register;

const styles = StyleSheet.create({
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
    buttons: {
        maxHeight: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
