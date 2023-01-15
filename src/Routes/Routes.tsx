import { FC } from "react";
import AuthService from "../services/auth.service";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage/RegisterPage";
import { HomePage } from "../Pages/Homepage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardComponent } from "../Pages/DashboardPage/Dashboard";
import { ProfileComponent } from "../Pages/ProfilePage/Profile";
import { BookUserComponent } from "../Pages/BookUserPage/BookUserPage";

export const MyRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/bookuser" element={<BookUserComponent />} />
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
