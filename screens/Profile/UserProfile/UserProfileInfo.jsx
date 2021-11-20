import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import standard_profile from '../../../assets/standard_profile.png';
import StyledButton from '../../../components/StyledButton';
import AppDefaultStyles from '../../../constants/AppDefaultStyles';

const UserProfileInfo = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={standard_profile}
                    style={styles.profilePicture}
                />
            </View>
            <View style={styles.info}>
                <Text>Naruto</Text>
                <Text>naruto@konoha.com</Text>
                <StyledButton
                    buttonStyles={{...AppDefaultStyles.primaryButton, width: 200, borderRadius: 10}}
                    buttonText="Editar Perfil"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profilePicture: {
        width: 115,
        height: 115,
        borderRadius: 100,
        marginRight: 25
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default UserProfileInfo;