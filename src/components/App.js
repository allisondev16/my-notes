import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import Login from './Login';
import Signup from './Signup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [notes, setNotes] = useState([]);
  // App is designed for one user, cookie22. Multiple users to be implemented soon.
  const userName = "cookie22";


  useEffect(() => {
    async function fetchData() {

      const req = await axios.get('/user/notes');

      const userNotes = req.data.find(user => user.username === userName);

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
  }, []);

  useEffect(() => {
    axios.put('/user/notes', {
      username: userName,
      notes: notes
    }).then(res => console.log(res));
  }, [notes]);


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
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={
            <div>

              <TextArea onAdd={addNote} />

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
          } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
