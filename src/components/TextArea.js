import React from "react";
import { Zoom, Fab } from '@mui/material';
//import { AddIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

function TextArea() {
    return (
        <form className="create-note">
            <input
                placeholder="Title"
            />
            <textarea
                placeholder="Take a note..."
                rows="3"
            />
            <Zoom in="true">
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>


    )
}

export default TextArea;