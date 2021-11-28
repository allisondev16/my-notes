import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <Link to={'/'} className="title">
                    Notes
                </Link>
                <Link to={'/login'}>
                    Login
                </Link>
            </header>
            <Outlet />
        </div>
    )
}

export default Header;