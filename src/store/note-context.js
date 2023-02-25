import React from "react";
const NoteContext = React.createContext({
    titleRef:"",
    noteRef:"",
    pinnedNotes : [],
    otherNotes : [],
    deletedNotes : [],
    archieveNotes : [],
    addToNoteList : () => {},
    deleteFromNoteList : () => {},
    editFromNoteList  : () => {},
    pinNote : () => {},
    unPinNote : () => {},
    setBackgroundColor:()=>{}
})

export default NoteContext;