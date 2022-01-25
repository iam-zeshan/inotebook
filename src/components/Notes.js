import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import Alert from './Alert';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <>
            <h2>Your Notes</h2>
            <Alert message = "This is one of the Amazing app "/>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key = {note._id} note={note} />
                })}

            </div>
        </>

    )
}

export default Notes;
