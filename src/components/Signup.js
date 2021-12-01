import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [credential, setUsername] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target;
        
        setUsername(prevValue => {
            return {...prevValue, [name]: value};
        });
    }

    function handleSignUp(event) {
        axios.post('/user/notes', {
            username: credential.username,
            password: credential.password,
            notes: []
        });
        event.preventDefault();
        navigate('/');
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