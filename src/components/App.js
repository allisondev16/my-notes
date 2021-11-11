import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import React, { useState } from 'react';

function App() {

  const [notes, setNotes] = useState();

  // to be continued
  function addNote(newNote){
    setNotes(prevValue => {
      return {...prevValue, newNote};
    })
  }


  return (
    <div>
      <Header />
      <TextArea 
        onAdd={addNote}
      />
      <Note />
    </div>
  );
}

export default App;
