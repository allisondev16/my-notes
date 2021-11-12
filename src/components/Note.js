import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function Note(prop) {
    return (
        <div className="note">
            <h1>{prop.title}</h1>
            <p>{prop.content}</p>
            <button className="deleteIcon">
                <DeleteOutlineIcon />
            </button>
            <button className="editIcon">
                <EditIcon />
            </button>
        </div>
    )
}

export default Note;