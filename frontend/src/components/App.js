import Header from './Header';
import TextArea from './TextArea';
import Note from './Note';
import Login from './Login';
import Signup from './Signup';
import Delete from './Delete';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import c from './constants'

function App() {

  const [notes, setNotes] = useState([]);

  const [username, setUser] = useState(null);

  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    async function fetchData() {

      if (username != null) {
        // User is logged in

        // get the user's data in database
        const user = await axios.get(`${c.URL}/users/${username}`);

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
        await axios.patch(`${c.URL}/users/${currentUsername}`, {
          notes: notes
        });

      } else if (currentUsername == null) {
        // if username is blank (not logged in), then do not save any changes of the notes array
      }
    }
    fetchData();
  }, [notes]);


  function addNote(newNote) {
    setNotes(prevValue => {
      return [newNote, ...prevValue];
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

      // remove the element based on the id in the array
      array.splice(id, 1);

      // add the edited note as first element of the array
      array.unshift(editedNote);

      return array;
    });

  }

  function changeUser(username) {
    setUser(username);
  }

  async function signUp(credential) {
    // Create a user by post request and save the existing notes to the new account
    try {
      await axios.post(`${c.URL}/users`, {
        username: credential.username,
        password: credential.password,
        notes: notes
      });
    } catch (error) {
      console.log("Sign up error: ",error.message)
    }
    
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
          <Route path="delete" element={<Delete user={username} clickedYes={handleLogout} />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
