import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, []);
  
  return (
    <div className='container my-5'>
      this is my name {a.state.name} and I'm in class ({a.state.class})
    </div>
  )
}
export default About;
