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

  const [username, setUser] = useState("");

  useEffect(() => {
    async function fetchData() {

      const req = await axios.get('/user/notes');

      const userNotes = req.data.find(user => user.username === username);

      if (userNotes) {
        setNotes(userNotes.notes);
        console.log("user found: "+userNotes.username);
      } else {
        console.log("user not found");
        axios.post('user/notes', {
          username: username
        });
      }
    }

    fetchData();
  }, [username]);

  useEffect(() => {
    axios.put('/user/notes', {
      username: username,
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

  function changeUser(username) {
    setUser(username);
  }

  function handleLogout() {
    setUser("");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header user={username} onClick={handleLogout} />}>
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
          <Route path="login" element={<Login onLogin={changeUser} />} />
          <Route path="signup" element={<Signup onSignup={changeUser} />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
