import axios from "axios";

const API_URL_REGISTER = "http://localhost:3200/users/";
const API_URL_LOGIN = "http://localhost:3200/auth/"

export interface LoginModel {
    email: string,
    password: string
}

export interface RegisterModel {
    email: string,
    password: string
}


export const register = async(registerData: RegisterModel) => {
    const response = await axios.post(API_URL_REGISTER, registerData)
    return response.status === 201;
}


export const login = async(loginData: LoginModel) => {
    const response = await axios.post(API_URL_LOGIN, loginData);
    
    const success = (response.status === 200);

    if(success) {
        localStorage.setItem("auth_jwt", response.data);
    }

    return success;
}


export const logout = async () => {
    localStorage.removeItem("auth_jwt");
}


const getAuthJwt = () => {
    const token = localStorage.getItem("auth_jwt");

    if(token) {
        return token;
    } else {
        return false;
    }
} 

export const getAuthHeader = () => {
    const token = getAuthJwt();

    if(token) {
        return {Authorization: token}
    } else {
        return {Authorization: ''}
    }
}


export const checkIsLoggedIn = () => {
    const token = getAuthJwt();
    return Boolean(token);
}

