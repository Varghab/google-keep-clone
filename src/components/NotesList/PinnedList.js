import React, { useContext } from 'react';
import classes from './PinnedList.module.css';
import Notes from './Notes';
import NoteContext from '../../store/note-context';

function PinnedList() {
    const ctx = useContext(NoteContext);
    const onUnPinHandler = (id) =>{
        ctx.unPinNote(id);
    }
    return (
        <div className={classes.pinnedListWrapper}>
            <p className={classes.noteType}>Pinned</p>
            <div className={classes.AllNotes}>
                {ctx.pinnedNotes.map((e)=> <Notes key={e.id} id={e.id} onUnPinHandler={onUnPinHandler} color={e.color} type={e.type} title={e.title} note={e.note} />)}
            </div>
        </div>
    )
}

export default PinnedList;
