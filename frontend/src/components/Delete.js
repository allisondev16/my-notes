import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Delete(props) {

    const navigate = useNavigate();

    function handleNo() {
        navigate('/');
    }

    async function handleYes() {
        const res = await axios.delete(`${c.URL}/users/${props.user}`);
        props.clickedYes();
        navigate('/');
    }

    return (
        <div className="deletePage">
            <h3>Are you sure you want to delete this account?</h3>
            <div className="deletePage__buttons">
                <button className="deletePage__buttons--yes" onClick={handleYes}>Yes</button>
                <button className="deletePage__buttons--no" onClick={handleNo}>No</button>
            </div>
        </div>
    )
}

export default Delete;