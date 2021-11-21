import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const req = await axios.get('/user/notes');

      // App is designed for one user, cookie22. Multiple users to be implemented soon.
      const userNotes = req.data.find(user => user.username === "cookie22");

      if (userNotes) {
        setNotes(userNotes.notes);
      } else {
        axios.post('/user/notes', {
          username: "newUser",
          notes: []
        })
          .then(response => console.log(response));
      }
    }

    fetchData();

  }, [notes])
  

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
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
      const array = [...prevValue];
      array[id] = editedNote;
      return array;
    });
    
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
