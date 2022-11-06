import {ChangeEvent, FC} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../Services/auth.service";
import AuthService from "../Services/auth.service";
import { MyCalendar } from "../Components/Calendar";



export const HomePage: FC = () => {
    return(<>
        <MyCalendar />
    </>)
}
