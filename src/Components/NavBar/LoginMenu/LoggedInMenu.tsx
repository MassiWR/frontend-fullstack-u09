import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPage } from "../../../Pages/LoginPage";
import AuthService from "../../../services/auth.service";


export const LoggedInMenu: FC = (props) => {

    function onClickLogut() {
        AuthService.logout();
        window.location.reload();
    }

    return(<>
        <div>
            <button onClick={onClickLogut}>Logout</button>
        </div>
        
    </>)
    
}