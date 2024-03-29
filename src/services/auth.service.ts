import axios from "axios";

const API_URL_REGISTER = "http://localhost:5100/users";
const API_URL_LOGIN = "http://localhost:5100/auth";

export interface LoginModel {
  email: string;
  password: string;
}

export interface RegisterModel {
  email: string;
  firstName: string;
  password: string;
}

class AuthService {
  register = async (registerData: RegisterModel) => {
    const response = await axios.post(`${API_URL_REGISTER}`, registerData);
    return response.status === 201;
  };

  login = async (loginData: LoginModel) => {
    const response = await axios.post(`${API_URL_LOGIN}`, loginData);

    const success = response.status === 201;
    const responseData = response.data;

    if (success) {
      console.log(response);
      localStorage.setItem("auth_jwt", responseData.accessToken);
      localStorage.setItem("userId", responseData.userId);
    }
    return success;
  };

  logout = async () => {
    localStorage.removeItem("auth_jwt");
  };

  getAuthJwt = () => {
    const token = localStorage.getItem("auth_jwt");

    if (token) {
      return token;
    } else {
      return false;
    }
  };

  getAuthHeader = () => {
    const token = this.getAuthJwt();

    if (token) {
      return { Authorization: token };
    } else {
      return { Authorization: "" };
    }
  };

  checkIsLoggedIn = () => {
    const token = this.getAuthJwt();
    return Boolean(token);
  };
}

export default new AuthService();
