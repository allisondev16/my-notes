import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import Login from './Login';
import Signup from './Signup';
import Delete from './Delete';
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
        // User is logged in

        // get the user's data in database
        const user = await axios.get(`/users/${username}`);

        // Get the user's existing data by State Hook
        setNotes(user.data.notes);
        setIsloaded(true);

      } else if (username == null) {
        // User is not logged in
        setNotes([{
          title: "Welcome to Notes by allison",
          content: "\nStart by creating notes and you can edit and delete.\n\nLog in to save your notes!"
        }]);
      }
    }

    fetchData();
  }, [username]);

  useEffect(() => {
    const currentUsername = username;
    async function fetchData() {

      if (currentUsername != null) {
        // user is logged in, then save every changes of user's notes array
        await axios.patch(`/users/${currentUsername}`, {
          notes: notes
        }).then(res => console.log(res));

      } else if (currentUsername == null) {
        // if username is blank (not logged in), then do not save any changes of the notes array
      }
    }
    fetchData();
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

  async function signUp(credential) {
    // Create a user by post request and save the existing notes to the new account
    await axios.post('/users', {
      username: credential.username,
      password: credential.password,
      notes: notes
    });
    setIsloaded(true);

    setUser(credential.username);
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
              <div className="container">
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
            </div>
          } />
          <Route path="login" element={<Login onLogin={changeUser} />} />
          <Route path="signup" element={<Signup onSignup={signUp} />} />
          <Route path="delete" element={<Delete user={username}/>} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
