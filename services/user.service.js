import { BASE_SERVICES_URL } from "../constants/endpoints";
import * as axios from 'axios';

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