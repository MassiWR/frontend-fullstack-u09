import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom"
import { text } from "stream/consumers";
import { RegisterModel } from "../Services/auth.service";
import AuthService from "../Services/auth.service";

 export const RegisterPage: FC = () => {
    const navigate = useNavigate();

    const [registerData, setregisterData] = useState<RegisterModel>({email: " ", password: ""});

    const [loading, setloading] = useState(false);
    
    function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setregisterData({
            email: e.target.value,
            password: registerData.password

        });
    }

    function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setregisterData({
            email: registerData.email,
            password: e.target.value
        });
    }


    async function handleClickRegister() {
        setloading(true);

        try {
            const success = await AuthService.register(registerData);
            if(success) {
                navigate("/Login")
            } else {
                alert("Error registering user");
            }
        } catch (error) {
            alert(error);
        } 
        finally {
            setloading(false);
        }
    }


    return (<>
        <h2>Register Page</h2>
        {loading && <h4>Loading...</h4>}

        <input type="text" name="email" placeholder="email" value={registerData.email} onChange={handleChangeEmail} />
        <input type="password" name="password" placeholder="password" value={registerData.password} onChange={handleChangePassword} />

        <button className="btn btn-blue" onClick={handleClickRegister}>Register</button>

    </>)
}