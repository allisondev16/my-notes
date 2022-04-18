import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Note(props) {

    const [editable, setEditable] = useState(false)
    const [editedNote, setEditedNote] = useState({
        title: "title",
        content: "content"
    })

    function deleteNote() {
        props.onDelete(props.id);
    }

    function handleEdit() {
        setEditable(prevValue => { return !prevValue });

        // Initialize the current Notes in editedNote state after the Edit button is clicked
        setEditedNote({
            title: props.title,
            content: props.content
        });
    }

    function handleChange(event) {
        const { name, value } = event.target

        // Update the current Note in editedNote state when changes are made
        setEditedNote(prevValue => {
            return { ...prevValue, [name]: value };
        })
    }

    function handleSave() {
        props.onSave(editedNote, props.id);
        setEditable(prevValue => { return !prevValue });
    }

    return (
        editable ? <div className="note noteEditable">

            <input className="title"
                name="title"
                placeholder="Title"
                defaultValue={props.title}
                onChange={handleChange}
            />

            <TextareaAutosize className="content"
                name="content"
                placeholder="Take a note..."
                defaultValue={props.content}
                onChange={handleChange}
            />

            <button className="deleteIcon" onClick={handleEdit}>
                <CloseIcon />
            </button>
            <button className="editIcon" onClick={handleSave}>
                <SaveIcon />
            </button>

        </div> :

            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>

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