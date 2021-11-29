import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="loginPage">
            <form className="login">
                <label>
                    Username
                    <input type="text" name="username" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <input type="submit" name="LogIn" value="Log In" />
            </form>

            <Link to={'/signup'}>Create new account</Link>
        </div>
    )
}

export default Login;