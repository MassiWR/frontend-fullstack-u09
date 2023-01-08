import { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../../services/auth.service";
import AuthService from "../../services/auth.service";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import "./LoginStyle.css";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const [loginData, setloginData] = useState<LoginModel>({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setloginData({
      email: e.target.value,
      password: loginData.password,
    });
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setloginData({
      email: loginData.email,
      password: e.target.value,
    });
  }

  async function handleClickLogin() {
    setloading(true);

    try {
      const success = await AuthService.login(loginData);
      if (success) {
        navigate("/");
        window.location.reload();
      } else {
        console.log(success);
        alert("Error logging in");
      }
    } catch (error) {
      alert(error);
    } finally {
      setloading(false);
    }
  }
  return (
    <>
      <div className="container">
        <div className="login-card" style={{ maxWidth: "50vw" }}>
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={loginData.email}
              onChange={handleChangeEmail}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChangePassword}
            />
            <br />
            <button type="submit" onClick={handleClickLogin}>
              Login
            </button>
          </form>
          <br />
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </>
  );
};
