import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={loginWithRedirect} className="btn btn-primary" >Ingresar con google o facebook</button>
}