import React from "react";
import { Link } from "react-router-dom";
import { StyledLogin } from "./style";
import Logo2 from "../../images/logo2.svg";

function Login () {

    return (

        <StyledLogin>
            <img src={Logo2} alt="ClassPLay" />
            <div className="login-section">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                </form>
                <div className="div-login">
                    <Link to={'/home'} className="btn-login"> ENTRAR </Link>
                </div>
            </div>
        </StyledLogin>
    )

}

export default Login;