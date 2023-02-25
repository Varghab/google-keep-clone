import React, { useReducer, useRef } from 'react'
import NoteContext from './note-context';

const initial = {
    pinnedNotes : [],
    otherNotes : [],
    deletedNotes: [],
    archieveNotes : []
}

const reducer = (prev, action)=>{
    switch(action.type){
        case "ADD_TO_LIST":
            const newList = {
                id: new Date().getTime().toString(),
                title:action.title,
                note:action.note,
                date: new Date(),
                type:"others",
                color: "white"
            }
            const updatedList = prev.otherNotes.concat(newList);
            return {
                ...prev, otherNotes:updatedList
            }

        case "PIN":
            const pinnedArray = prev.otherNotes.filter((e)=>e.id===action.id);
            const [pinnedItem] = pinnedArray;
            const updatedPinnedItem = {...pinnedItem, type:'pin'}
            const updatedOtherNotes = prev.otherNotes.filter((e)=>e.id !== action.id);
            console.log(updatedOtherNotes);
            let check=false;
            prev.pinnedNotes.forEach(element => {
                if(element.id===action.id){
                    check=true;
                }
            });
            
            if(check===false){
                const updatedPinnedList = [updatedPinnedItem,...prev.pinnedNotes]
                return{
                    ...prev, pinnedNotes: updatedPinnedList,otherNotes: [...updatedOtherNotes]
                }
            }else{
                check=true;
                return{...prev}
            }
        
        case "UNPIN":
            const [unpinnedArray]= prev.pinnedNotes.filter((e)=> e.id === action.id);
            const unpinnedItem = {...unpinnedArray, type:"others"};
            const updatedpinnedArray= prev.pinnedNotes.filter((e)=> e.id !== action.id);
            return {
                ...prev, otherNotes:[...prev.otherNotes, unpinnedItem], pinnedNotes:updatedpinnedArray
            }     
        case "SET_COLOR":
            prev.otherNotes.forEach((e)=>{
                if(e.id ===action.id){
                    console.log(e);
                    e.color=action.reqColor
                }
            })
            prev.pinnedNotes.forEach((e)=>{
                if(e.id ===action.id){
                    console.log(e);
                    e.color=action.reqColor
                }
            })
            return{...prev}
        default:
            return prev;
    }
}

function NoteProvider(props) {
    const titleRef = useRef();
    const noteRef = useRef();

    const [state, dispatch] = useReducer(reducer, initial )
    const addToNoteList = (title, note) => {
        dispatch({type:"ADD_TO_LIST",title:title,note:note})       
    }

    const pinNote = (id)=>{
        dispatch({type:"PIN", id:id})
    }
    const unPinNote = (id)=>{
        dispatch({type:"UNPIN", id:id})
    }
    const setBackgroundColor = (id, reqColor)=>{
        dispatch({type:"SET_COLOR", id:id,reqColor:reqColor})
    }

    const updatedStates = {
        titleRef:titleRef,
        noteRef:noteRef,
        pinnedNotes : state.pinnedNotes,
        otherNotes : state.otherNotes,
        deletedNotes : state.deletedNotes,
        archieveNotes : state.archieveNotes,
        addToNoteList : addToNoteList,
        deleteFromNoteList : () => {},
        editFromNoteList  : () => {},
        pinNote : pinNote,
        unPinNote: unPinNote,
        setBackgroundColor:setBackgroundColor
    }
    return (
        <NoteContext.Provider value={updatedStates}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteProvider
