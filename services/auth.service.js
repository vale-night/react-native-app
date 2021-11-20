import * as axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

import { APP_NAME, BASE_SERVICES_URL } from "../constants/endpoints";

const AUTH_BASE_URL = `${BASE_SERVICES_URL}:3500/auth`;
const ACCESS_TOKEN_KEY = `@${APP_NAME}:accessToken`;

export const login = async (username, password) => {
    try {
        const response = await axios.default.post(`${AUTH_BASE_URL}/login`, { username, password });
        const data = response.data;
        if(!data.auth)
            throw 'Não foi possível autenticar! Verifique suas credenciais';
        
        const accessToken = data.accessToken;
        console.log(accessToken);
        await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        return { auth: true };
    } catch (error) {
        return {
            auth: false,
            error
        }
    }
}

export const logout = async () => {
    console.log('Deslogando');
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    console.log(await getAccessToken());
    return true;
}

export const getAccessToken = async () => {
    return await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

export const isUserAuthenticated = async () => {
    const accessToken = await getAccessToken();
    if(!accessToken)
        return false;

    const tokenData = jwt_decode(accessToken);
    if (Date.now() >= tokenData.exp * 1000) {
        return false;
    }
    return true;
}