import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Header(props) {

    function handleClick() {
        props.onClick();
    }

    return (
        <div>
            <header>
                <Link to={'/'} className="title">
                    Notes
                </Link>
                <Link to={'/login'} onClick={handleClick}>
                    {props.user ? "Logout "+props.user : "Login"}
                </Link>
            </header>
            <Outlet />
        </div>
    )
}

export default Header;