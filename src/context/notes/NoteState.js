import NoteContext from './NoteContext';
import React, {useState} from 'react';
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
    const initialNotes = [
        {
          "_id": "61e39ef11a9c4f88a2956d4b6",
          "user": "61dfa1f31b2115f0b1834f5b",
          "title": "My title updated2",
          "description": "Please do not fell in Love with someone updated",
          "tag": "personel",
          "date": "2022-01-16T04:28:33.159Z",
          "__v": 0
        },
        {
            "_id": "615e39ef11a9c4f88a295d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          },
          {
            "_id": "61e39ef11a9c4f848a295d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          },
          {
            "_id": "61e3349ef11a9c4f88a295d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          },
          {
            "_id": "61e39ef11a9c4f88a2953d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          },
          {
            "_id": "61e39ef311a9c4f88a3295d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          },
          {
            "_id": "61e39ef11a9c4f883a295d4b6",
            "user": "61dfa1f31b2115f0b1834f5b",
            "title": "My title",
            "description": "Please do not fell in Love with someone updated",
            "tag": "personel",
            "date": "2022-01-16T04:28:33.159Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(initialNotes);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;