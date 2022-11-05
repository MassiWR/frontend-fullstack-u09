import {ChangeEvent, FC} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../services/auth.service";
import AuthService from "../services/auth.service";



export const LoginPage: FC = () => {

    const navigate = useNavigate();

    const [loginData, setloginData] = useState<LoginModel>({email: "", password: ""});
    const [loading, setloading] = useState(false);

    function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setloginData({
            email: e.target.value,
            password: loginData.password
        });
    }


    function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setloginData({
            email: loginData.email,
            password: e.target.value
        });
    }

    async function handleClickLogin() {
        setloading(true);

        try {
            const success = await AuthService.login(loginData);
            if(success) {
                navigate("/home");
                window.location.reload();
            } else {
                console.log(success);
                alert("Error logging in")
            }
        } catch (error) {
            alert(error);
        } 
        finally {
            setloading(false);
        }
    }


    return(<>
        <h3>Login Page</h3>
        {loading && <h3>Loading...</h3>}

        <input type="email" name="email" placeholder="email" value={loginData.email} onChange={handleChangeEmail} />
        <input type="password" name="password" placeholder="password" value={loginData.password} onChange={handleChangePassword} />

        <button className="btn btn-blue" onClick={handleClickLogin}>Login</button>

    </>)
}
