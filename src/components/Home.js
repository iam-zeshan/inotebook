import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const Home = () => {
  const a = useContext(NoteContext);
  return (
    <div class='conatainer my-5'>
      <p2>this is '{a.name}' in Home components</p2>
    </div>
  )
}
export default Home;

