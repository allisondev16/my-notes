import React from "react";
import { Link, Outlet } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
                <div className="account">
                    <Link to={'/login'} onClick={handleClick}>
                        {props.user ? "Logout " + props.user : "Login"}
                    </Link>
                    {!props.user &&
                        <Link to={'/delete'} onClick={handleClick}>
                            <button className="deleteIcon" title="Delete Account">
                                <DeleteOutlineIcon />
                            </button>
                        </Link>
                    }
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default Header;