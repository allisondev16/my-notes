import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import React, { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevValue => {
      return prevValue.filter((note, index) => {
        return index !== id;
      })
    })
  }

  function saveEditedNote(editedNote, id) {
    
    setNotes(prevValue => {
      return [...prevValue, editedNote];
    })
    // setNotes(prevValue => {
    //   prevValue[id] = editedNote;
    //   return prevValue;
    // })
    // console.log(notes);
    
  }


  return (
    <div>
      <Header />
      <TextArea
        onAdd={addNote}
      />
      {notes.map((note, index) => {
        return (<Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          onSave={saveEditedNote}
        />)
      })}

    </div>
  );
}

export default App;
