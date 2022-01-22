import NoteContext from './NoteContext';
import {useState} from 'react';
const NoteState = (props) => {
    const s1 = {
        "name": "Zeshan",
        "class": "7th"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Zeshan Haider",
                "class": "8th"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;