import React, { useState } from "react";
import { Zoom, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function TextArea() {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function submitNote(event) {

    }

    // to be continued
    function handleChange(event){
        const { name, value } = event.target;

        setNote(prevValue => {
            return (
                {...prevValue, [name]: value}
            );
        });
    }

    return (
        <form className="create-note">
            <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
            />
            <textarea
                name="content"
                placeholder="Take a note..."
                rows="3"
                value={note.content}
                onChange={handleChange}
            />
            <Zoom in="true">
                <Fab size="small" color="primary" aria-label="add" onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>


    )
}

export default TextArea;