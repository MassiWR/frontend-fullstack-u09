import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterModel } from "../../services/auth.service";
import AuthService from "../../services/auth.service";
import { Box, Button, Stack, TextField, Grid } from "@mui/material";

export const RegisterPage: FC = () => {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState<RegisterModel>({
    email: "",
    firstName: "",
    password: "",
  });

  const [loading, setloading] = useState(false);

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setregisterData({
      ...registerData,
      email: e.target.value,
    });
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setregisterData({
      ...registerData,
      password: e.target.value,
    });
  }

  function handleChangeFirstName(e: ChangeEvent<HTMLInputElement>) {
    setregisterData({
      ...registerData,
      firstName: e.target.value,
    });
  }

  async function handleClickRegister() {
    setloading(true);

    try {
      const success = await AuthService.register(registerData);
      if (success) {
        navigate("/Login");
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      alert(error);
    } finally {
      setloading(false);
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
              bgcolor: "primary.main",
            },
          }}
        >
          <Stack spacing={4}>
            <Stack direction="column" spacing={2}>
              {loading && <h4>Loading...</h4>}
              <TextField
                label="First Name"
                value={registerData.firstName}
                onChange={handleChangeFirstName}
              />
              <TextField
                label="Email"
                type="email"
                value={registerData.email}
                onChange={handleChangeEmail}
              />
              <TextField
                label="Password"
                type="password"
                value={registerData.password}
                onChange={handleChangePassword}
              />
            </Stack>
            <Button
              color="inherit"
              className="btn btn-blue"
              onClick={handleClickRegister}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};
