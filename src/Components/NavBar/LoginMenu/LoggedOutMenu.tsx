import { Button } from "@mui/material";
import react, { FC } from "react";
import { Link } from "react-router-dom";

export const LoggedOutMenu: FC = () => {
  return (
    <>
      <Button href="/login" color="inherit">
        Login
      </Button>
      <Button href="/register" color="inherit">
        Register
      </Button>
    </>
  );
};
