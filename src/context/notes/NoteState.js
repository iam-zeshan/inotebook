import NoteContext from './NoteContext';
import React, { useState } from 'react';
const NoteState = (props) => {
  // const s1 = {
  //     "name": "Zeshan",
  //     "class": "7th"
  // }
  // const [state, setState] = useState(s1);
  // const update = () => {
  //     setTimeout(() => {
  //         setState({
  //             "name": "Zeshan Haider",
  //             "class": "8th"
  //         })
  //     }, 1000);
  // }
  const host = "http://localhost:5000";
  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes);

  // Get all Notes
  const getNotes = async () => {
    // API Calls 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZmExZjMxYjIxMTVmMGIxODM0ZjViIn0sImlhdCI6MTY0MjI3MTczN30.2tBvBOmRPQ8XuGdAQ6ooxZBGCJG3nxYZxfAUqtZRXj0'
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add Note
  const addNote = async (title, description, tag) => {
    // API Calls 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZmExZjMxYjIxMTVmMGIxODM0ZjViIn0sImlhdCI6MTY0MjI3MTczN30.2tBvBOmRPQ8XuGdAQ6ooxZBGCJG3nxYZxfAUqtZRXj0'
      },
      body: JSON.stringify({ title, description, tag })
    });
    
    const note = await response.json();
    setNotes(notes.concat(note));
  }
  // Delete Note
  const deleteNote = async (id) => {
    // console.log("Delete Note method is triggered "+ id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZmExZjMxYjIxMTVmMGIxODM0ZjViIn0sImlhdCI6MTY0MjI3MTczN30.2tBvBOmRPQ8XuGdAQ6ooxZBGCJG3nxYZxfAUqtZRXj0'
      },
    });
    const json = response.json();
    // TODO: Add API Call
    const newNotes = notes.filter((e) => { return e._id !== id });
    setNotes(newNotes);
  }
  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API Calls 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZmExZjMxYjIxMTVmMGIxODM0ZjViIn0sImlhdCI6MTY0MjI3MTczN30.2tBvBOmRPQ8XuGdAQ6ooxZBGCJG3nxYZxfAUqtZRXj0'
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = response.json();
    
    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;