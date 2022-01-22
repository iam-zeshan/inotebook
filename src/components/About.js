import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const a = useContext(NoteContext);
  a.name = "Haider";
  return (
    <div class='container my-5'>
      this is my name {a.name} and I'm in class ({a.class})
    </div>
  )
}  
export default About;
