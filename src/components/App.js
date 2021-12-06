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

  const [username, setUser] = useState(null);

  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    async function fetchData() {

      if (username != null) {
        const req = await axios.get('/user/notes');

        const userNotes = req.data.find(user => user.username === username);

        if (userNotes) {
          setNotes(userNotes.notes);
          setIsloaded(true);
          console.log("user found: " + userNotes.username);
        } else {
          console.log("user not found");
          axios.post('user/notes', {
            username: username
          });
        }
      } else if (username == null) {
        setNotes([{
          title: "Welcome to Notes by allison",
          content: "Start by creating notes and you can edit and delete.\nLog in to save your notes!"
        }]);
      }
    }

    fetchData();
  }, [username]);

  useEffect(() => {
    if (username != null) {
      // user is logged in, then save every changes of user's notes array
      axios.put('/user/notes', {
        username: username,
        notes: notes
      }).then(res => console.log(res));
    } else if (username == null) {
      // if username is blank (not logged in), then do not save any changes of the notes array
    }
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

  //to be continued
  async function signUp(username) {
    const data = await axios.get('/user/notes');
    console.log(data);
    setUser(username);
  }

  function handleLogout() {
    setUser(null);
    setIsloaded(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header user={username} onClick={handleLogout} />}>
          <Route index element={
            <div>

              <TextArea onAdd={addNote} />

              {(isLoaded || !username) ?

                notes.map((note, index) => {
                  return (<Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                    onSave={saveEditedNote}
                  />)
                }) :

                "Loading..."

              }

            </div>
          } />
          <Route path="login" element={<Login onLogin={changeUser} />} />
          <Route path="signup" element={<Signup onSignup={signUp} />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
