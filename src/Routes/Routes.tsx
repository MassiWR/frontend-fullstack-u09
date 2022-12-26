import { FC } from "react";
import AuthService from "../services/auth.service";
import { Routes, Route, Link } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Navbar } from "../Components/NavBar/NavBar";
import App from "../App";
import { HomePage } from "../Pages/HomePage";

export const MyRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <p>
              <b>
                Path not found
                <br />
                404
              </b>
            </p>
          }
        />
      </Routes>
    </>
  );
};
