import { BASE_SERVICES_URL } from "../constants/endpoints";
import * as axios from 'axios';
import { getAccessToken } from "./auth.service";

const USER_BASE_URL = `${BASE_SERVICES_URL}:3000/users`;


export const saveUser = async (user) => {
    try {
        const response = await axios.default.post(USER_BASE_URL, user);
        const data = response.data;
        if(data._id)
            return {
                success: true
            }
    } catch (error) {
        return {
            success: false,
            error
        }
    }
}

export const updateUser = async (id, updatedUser) => {
    try {
        const accessToken = await getAccessToken();
        console.log(`${USER_BASE_URL}/${id}`);
        const response = await axios.default.put(`${USER_BASE_URL}/${id}`, updatedUser, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        console.log(data);
        if(!data._id)
            throw 'Os dados não foram atualizados'
        return {
            success: true
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error
        }
    }
}