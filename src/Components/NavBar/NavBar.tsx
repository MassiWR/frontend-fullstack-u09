import react, { FC, useEffect, useState } from "react"
import AuthService from "../../Services/auth.service";
import { LoggedInMenu } from "./LoginMenu/LoggedInMenu";
import { LoggedOutMenu } from "./LoginMenu/LoggedOutMenu";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Link } from "@mui/material";
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

export const Navbar: FC = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = AuthService.checkIsLoggedIn();
        setisLoggedIn(isLoggedIn);
  
    }, [])


    return (<>
        
       <AppBar position="static" >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <CalendarMonthTwoToneIcon />
          </IconButton>
          <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
            BookR
            </Typography>
            <Stack direction='row' spacing={2}>
              {
                isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu />
              }
            </Stack>
        </Toolbar>
       </AppBar>
        
    </>)
}