import React from "react";

function Signup() {
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
                <input type="submit" name="SignUp" value="Sign Up" />
            </form>

            
        </div>
    )
}

export default Signup;