import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(props) {

    const [credential, setCredential] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target;
        
        setCredential(prevValue => {
            return {...prevValue, [name]: value};
        });
    }

    function handleSignUp(event) {
        event.preventDefault();
        navigate('/');
        props.onSignup(credential.username);
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
                <input type="submit" name="SignUp" value="Sign Up" onClick={handleSignUp} />
            </form>
        </div>
    );
}

export default Signup;