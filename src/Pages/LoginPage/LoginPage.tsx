import { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../../services/auth.service";
import AuthService from "../../services/auth.service";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const [loginData, setloginData] = useState<LoginModel>({
    email: "",
    password: "",
  });

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
    try {
      const success = await AuthService.login(loginData);
      if (success) {
        navigate("/dashboard");
        window.location.reload();
      } else {
        console.log(success);
        alert("Error logging in");
      }
    } catch (error) {
      alert(error);
    } finally {
    }
  }
  return (
    <>
      <Grid container justifyContent="center" marginTop={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "500",
            width: {
              xs: 200, // 0vw
              sm: 300, // 600vw
              md: 400, // 900vw
              lg: 500, // 1200vw
              xl: 600, // 1536vw
            },
          }}
        >
          <Stack spacing={4}>
            <Stack direction="column" spacing={2}>
              <TextField
                label="Email"
                type="email"
                value={loginData.email}
                onChange={handleChangeEmail}
              />
              <TextField
                label="Password"
                type="password"
                value={loginData.password}
                onChange={handleChangePassword}
              />
            </Stack>
            <Button
              color="inherit"
              className="btn btn-blue"
              onClick={handleClickLogin}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};
