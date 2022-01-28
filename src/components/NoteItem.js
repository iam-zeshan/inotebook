import React, {useContext} from 'react';
import noteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <>
            <div className="col-md-4 mt-3">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fas fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NoteItem;
