import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function Note() {
    return (
        <div className="note">
            <h1>{}</h1>
            <p>{}</p>
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