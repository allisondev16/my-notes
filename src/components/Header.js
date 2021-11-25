import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                Notes
            </h1>
            <Link to={'/login'}>
                Login
            </Link>
        </header>
    )
}

export default Header;