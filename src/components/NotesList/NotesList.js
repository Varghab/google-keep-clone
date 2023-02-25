import React, { useContext } from 'react';
import classes from './NotesList.module.css';
import PinnedList from './PinnedList';
import OtherList from './OtherList';
import NoteContext from '../../store/note-context';

function NotesList({title,note}) {
    const ctx = useContext(NoteContext);
    return (
        <div className={classes.noteListWrapper}>
            {ctx.pinnedNotes.length >= 1 && <PinnedList />}
            {ctx.otherNotes.length >=1 && <OtherList />}
        </div>
    )
}

export default NotesList;
