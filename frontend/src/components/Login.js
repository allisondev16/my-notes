import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(props) {

    const navigate = useNavigate();

    const [isInvalidPassword, setIsInvalidPassword] = useState(false);

    const [credential, setCredential] = useState({
        username: "",
        password: ""
    });

    async function handleLogin(event) {
        event.preventDefault();

        // get data from database
        const user = await axios.get(`${c.URL}/users/${credential.username}`);

        // filter the password
        // const userData = req.data.find(user => {
        //     return user.username === credential.username
        // });

        if (user.data.password === credential.password) {
            navigate('/');
            props.onLogin(credential.username);
        } else {
            setIsInvalidPassword(true);
        }
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
                    {isInvalidPassword && <p style={{textAlign:"center", width: "100%"}}>Invalid Username or Password</p>}
                </label>
                <input type="submit" name="LogIn" value="Log In" onClick={handleLogin} />
            </form>

            <Link to={'/signup'}>Create new account</Link>
        </div>
    )
}

export default Login;