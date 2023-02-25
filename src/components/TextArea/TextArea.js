import React, { useContext} from 'react';
import classes from './TextArea.module.css';
import Sidebar from '../Sidebar/Sidebar';
import NoteArea from './NoteArea';
import NotesList from '../NotesList/NotesList';
import NoteContext from '../../store/note-context';


function TextArea(props) {
    const ctx = useContext(NoteContext);
    return (
        <>
            <Sidebar toggleIsValid={props.toggleIsValid} />
            <div className={classes.noteAndListWrapper}>
                <NoteArea ref={{noteRef:ctx.noteRef,titleRef:ctx.titleRef}} />
                <NotesList />
            </div>
        </>
    )
}

export default TextArea
