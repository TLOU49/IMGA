import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../models/User";

const api = "http://localhost:5204/backend"

export const loginAPI = async (username, password)=>{
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            username: username,
            password: password
        });
        return data;
    } catch (error) {
        handleError ()
    }
};

export const registerAPI = async (email, username, password)=>{
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            email: email,
            username: username,
            password: password
        });
        return data;
    } catch (error) {
        handleError ()
    }
};