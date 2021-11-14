import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

function Note(prop) {

    const [editable, setEditable] = useState(false)

    function deleteNote() {
        prop.onDelete(prop.id);
    }

    function handleEdit() {
        setEditable(prevValue => { return !prevValue });
    }

    function handleSave() {
        
    }

    return (
        editable ? <div className="note noteEditable">

            <input className="title"
                name="title"
                placeholder="Title"
                defaultValue={prop.title}
            />

            <input className="content"
                name="content"
                placeholder="Take a note..."
                defaultValue={prop.content}
            />

            <button className="deleteIcon" onClick={handleEdit}>
                <CloseIcon />
            </button>
            <button className="editIcon" onClick={handleSave}>
                <SaveIcon />
            </button>
        </div> :

            <div className="note">
                <h1>{prop.title}</h1>
                <p>{prop.content}</p>
                <button className="deleteIcon" onClick={deleteNote}>
                    <DeleteOutlineIcon />
                </button>
                <button className="editIcon" onClick={handleEdit}>
                    <EditIcon />
                </button>
            </div>
    )
}

export default Note;