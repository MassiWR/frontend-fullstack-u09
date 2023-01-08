import { FC } from "react";
import AuthService from "../services/auth.service";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Navbar } from "../Components/NavBar/NavBar";
import App from "../App";
import { HomePage } from "../Pages/Homepage/HomePage";
//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "../Pages/Dashboard";

export const MyRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*     <Route path="/profile/:id" element={<Profile />} />
          <Route path="/book/:user" element={<BookUser />} />  */}
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
      <ToastContainer />
    </>
  );
};
