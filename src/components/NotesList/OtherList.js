import React, { useContext } from 'react';
import classes from './PinnedList.module.css';
import Notes from './Notes';
import NoteContext from '../../store/note-context';


function OtherList() {
    const ctx = useContext(NoteContext);
    const onPinHandler = (id) =>{
        ctx.pinNote(id);
    }
    return (
        <div className={classes.otherListWrapper}>
            <p class={classes.noteType}>Others</p>
            <div className={classes.AllNotes}>
                {ctx.otherNotes.map((e)=> <Notes id={e.id} type={e.type} onPinHandler={onPinHandler} color={e.color} title={e.title} note={e.note} />)}
            </div>    
        </div>
    )
}

export default OtherList
