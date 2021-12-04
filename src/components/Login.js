import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    const [credential, setCredential] = useState({
        username: "",
        password: ""
    });

    function handleLogin(event) {
        event.preventDefault();
        navigate('/');
        props.onLogin(credential.username);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setCredential(prevValue => {
            return {...prevValue, [name]:value}
        })
    }

    return (
        <div className="loginPage">
            <form className="login">
                <label>
                    Username
                    <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <input type="submit" name="LogIn" value="Log In" onClick={handleLogin} />
            </form>

            <Link to={'/signup'}>Create new account</Link>
        </div>
    )
}

export default Login;