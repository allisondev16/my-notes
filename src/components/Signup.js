import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup(props) {

    const [credential, setCredential] = useState({
        username: "",
        password: "",
        verifyPassword: ""
    });

    const [disableSubmit, setDisableSubmit] = useState("yes");

    const [isPasswordVerified, setPasswordVerified] = useState(true);

    const [isUsernameTaken, setIsUsernameTaken] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        /****** Submit button is disabled until all three fields are filled ******/

        // This code is flexible:
        // const credentialArray = Object.values(credential);
        // for (let index = 0; index < credentialArray.length; index++) {
        //     if (credentialArray[index] === "") {
        //         setDisableSubmit("yes");
        //         break;
        //     } else if (index === credentialArray.length-1) {
        //         setDisableSubmit("");
        //     } else {
        //         continue;
        //     }
        // }

        // OR

        // This has shorter lines of code, but not flexible:
        if (credential.username === "" || credential.password === "" || credential.verifyPassword === "") {
            setDisableSubmit("yes");
        } else {
            setDisableSubmit("");
        }

    }, [credential]);

    function handleChange(event) {
        const { name, value } = event.target;

        setCredential(prevValue => {
            return { ...prevValue, [name]: value };
        });
    }

    async function handleSignUp(event) {
        event.preventDefault();

        // get the user's data
        const user = await axios.get(`/users/${credential.username}`);
        //const userIsExisting = req.data.find(userData => userData.username === credential.username);
        console.log(user);
        if (user.data.message !== "User not found.") {
            // render "That username is taken. Try another."
            setIsUsernameTaken(true);
            // Check if password is verified
            if (credential.password === credential.verifyPassword) {
                setPasswordVerified(true);
            } else {
                setPasswordVerified(false);
            }
        } else {
            // if user is new, then create a new user (handled by Effect Hook in App.js)
            setIsUsernameTaken(false);
            if (credential.password === credential.verifyPassword) {
                // If password is verified, finish sign up
                setPasswordVerified(true);
                props.onSignup(credential);
                navigate('/');
            } else {
                // If password is not verified, do not proceed to sign up
                setPasswordVerified(false);
            }
        }
    }

    return (
        <div className="loginPage">
            <form className="login">
                <label>
                    Username
                    <input type="text" name="username" onChange={handleChange} />
                    {isUsernameTaken && <p>That username is taken. Try another.</p>}
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <label>
                    Verify Password
                    <input type="password" name="verifyPassword" onChange={handleChange} validation={true} required />
                    {!isPasswordVerified && <p>Those passwords didn’t match. Try again.</p>}
                </label>
                <input type="submit" name="SignUp" value="Sign Up" onClick={handleSignUp} disabled={disableSubmit} />
            </form>
        </div>
    );
}

export default Signup;