import React, { useState } from 'react';
import { Button, Image, StyleSheet, ToastAndroid, View } from 'react-native';
import { Text } from 'react-native-paper';
import standard_profile from '../../../assets/standard_profile.png';
import StyledButton from '../../../components/StyledButton';
import AppDefaultStyles from '../../../constants/AppDefaultStyles';
import { getUserData } from '../../../services/auth.service';

const UserProfileInfo = ({navigation, parentStyles}) => {

    const [user, setUser] = useState();

    getUserData().then(result => {
        if(!result)
            throw 'Dados do usuário não encontrados!';
        setUser(result);
    }).catch(err => {
        ToastAndroid.showWithGravity(`Ocorreu um erro: ${err}`, 700, ToastAndroid.CENTER);
    });
    return (
        <View style={{...styles.container, ...parentStyles}}>
            <View>
                <Image 
                    source={standard_profile}
                    style={AppDefaultStyles.profilePicture}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>{user?.name}</Text>
                <Text style={styles.infoText}>{user?.email}</Text>
                <StyledButton
                    buttonStyles={{...AppDefaultStyles.primaryButton, width: 200, borderRadius: 10}}
                    buttonText="Editar Perfil"
                    onPress={() => user && navigation.navigate('_EditProfile', {user})}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 300,
        maxHeight: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoText: {
        // flex: 1,
        width: 200,
        textAlign: 'center'
    }
});

export default UserProfileInfo;