import { Button } from "@mui/material";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPage } from "../../../Pages/LoginPage";
import AuthService from "../../../services/auth.service";

export const LoggedInMenu: FC = (props) => {
  function onClickLogout() {
    AuthService.logout();
    window.location.reload();
  }

  return (
    <>
      <Button color="inherit" onClick={onClickLogout}>
        Logout
      </Button>
    </>
  );
};
