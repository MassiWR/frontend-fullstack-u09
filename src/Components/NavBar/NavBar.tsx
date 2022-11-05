import react, { FC, useEffect, useState } from "react"
import AuthService from "../../services/auth.service";
import { LoggedInMenu } from "./LoginMenu/LoggedInMenu";
import { LoggedOutMenu } from "./LoginMenu/LoggedOutMenu";



export const Navbar: FC = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = AuthService.checkIsLoggedIn();
        setisLoggedIn(isLoggedIn);
  
    }, [])


    return (<>
        
        <nav className="navigation">
          <div className="topnav">
        {isLoggedIn  ?  <LoggedInMenu /> : <LoggedOutMenu />}
          </div>
        </nav>
        
    </>)
}