import * as axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getAccessToken = async () => {
    return await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

export const isUserAuthenticated = async () => {
    const accessToken = await getAccessToken();
    if(!accessToken)
        return false;
    const userData = decodeToken(accessToken);
    console.log(userData);
    return true;
}


const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = Buffer.from(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    const payload = JSON.parse(payloadinit);
    return payload;
}