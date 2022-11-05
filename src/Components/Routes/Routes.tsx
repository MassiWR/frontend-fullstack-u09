import { FC } from "react";
import AuthService from "../../services/auth.service";
import { Routes, Route, Link } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { RegisterPage } from "../../Pages/RegisterPage";
import { Navbar } from "../NavBar/NavBar";
import App from "../../App";

export const MyRouter: FC = () => {

    return(<>

        <Routes>
          <Route path="../../app.tsx" element={<App />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

    </>)
    
}