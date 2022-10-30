import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";

export const LoggedInMenu: FC = () => {

    const navigate = useNavigate();

    function onClickLogut() {
        logout();
        navigate("/");
        window.location.reload();

    }


    return(<>
        <Link to={"/test"}></Link>
        <button onClick={onClickLogut}>Logout</button>
    </>)
    
}