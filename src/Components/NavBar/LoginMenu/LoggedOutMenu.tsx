import react, { FC } from "react"
import { Link } from "react-router-dom"




export const LoggedOutMenu: FC = () => {

    return (<>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
    </>)
}