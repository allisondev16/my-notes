import React, { useState } from "react";
import { Zoom, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function TextArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [clicked, setClicked] = useState(false);

    function submitNote() {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    }

    function handleChange(event){
        const { name, value } = event.target;

        setNote(prevValue => {
            return (
                {...prevValue, [name]: value, }
            );
        });
    }

    function handleClick(){
        setClicked(true);
    }

    return (
        <form className="create-note">
            {clicked && <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
            />}
            <textarea
                name="content"
                placeholder="Take a note..."
                rows={clicked ? "5" : "1"}
                value={note.content}
                onChange={handleChange}
                onClick={handleClick}
            />
            {clicked && <Zoom in="true">
                <Fab size="small" color="primary" aria-label="add" onClick={submitNote} disabled={note.content?false:true}>
                    <AddIcon />
                </Fab>
            </Zoom>}
        </form>


    )
}

export default TextArea;