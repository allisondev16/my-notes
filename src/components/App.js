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


  return (
    <div>
      <Header />
      <TextArea
        onAdd={addNote}
      />
      {notes.map((note, index) => {
        return (<Note
          key={index}
          title={note.title}
          content={note.content}
        />)
      })}

    </div>
  );
}

export default App;
