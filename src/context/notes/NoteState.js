import NoteContext from './NoteContext';

const NoteState = (props)=> {
    const state = {
        "name": "Zeshan",
        "class": "7th" 
    }
    return (
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;