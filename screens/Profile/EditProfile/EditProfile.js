import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import AppDefaultStyles from '../../../constants/AppDefaultStyles';
import standard_profile from '../../../assets/standard_profile.png';
import StyledButton from '../../../components/StyledButton';
import { updateUser } from '../../../services/user.service';


const EditProfile = ({route, navigation}) => {
    const {user} = route.params;
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);

    const saveChangesHandler = () => {
        const userToUpdate = {
            name,
            email,
        };
        updateUser(user.id, userToUpdate)
            .then(result => {
                if(!result.success)
                    throw result.error;
                ToastAndroid.showWithGravity('Dados atualizados!', 700, ToastAndroid.CENTER)
            })
            .catch(err => ToastAndroid.showWithGravity(`Ocorreu um erro ao atualizar os dados: ${err}`, 700, ToastAndroid.CENTER));
    }
    return (<View style={AppDefaultStyles.container}>
        <Text style={AppDefaultStyles.heading}>Editar Perfil</Text>
        <View style={styles.profilePictureContainer}>
            <Image
                source={standard_profile}
                style={AppDefaultStyles.profilePicture}
            />
            <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Em breve você poderá atualizar sua foto!', 700, ToastAndroid.CENTER)}>
                <FontAwesome name="camera" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.form}>
                <TextInput
                    placeholder='Nome completo'
                    style={AppDefaultStyles.input}
                    placeholderTextColor={AppDefaultStyles.primaryColor}
                    textContentType='name'
                    underlineColor='transparent'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder='E-mail'
                    style={AppDefaultStyles.input}
                    placeholderTextColor={AppDefaultStyles.primaryColor}
                    textContentType='emailAddress'
                    underlineColor='transparent'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
        <View style={styles.buttons}>
            <StyledButton 
                buttonText="Alterar senha"
                buttonStyles={{...AppDefaultStyles.primaryButton, backgroundColor: AppDefaultStyles.darkerPrimaryColor}}
                onPress={() => ToastAndroid.showWithGravity('Em breve!', 700, ToastAndroid.CENTER)}
            />
            <StyledButton 
                buttonText="Salvar alterações"
                onPress={() => saveChangesHandler()}
            />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    profilePictureContainer: {
        // flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-end'
    },
    form: {
        maxHeight: 150,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttons: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

export default EditProfile;