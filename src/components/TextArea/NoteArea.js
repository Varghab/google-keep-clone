import React, { useContext, useState } from 'react';
import classes from './NoteArea.module.css';
import NoteContext from '../../store/note-context';


const NoteArea = React.forwardRef((props,ref)=>{
    const ctx = useContext(NoteContext);
    const[noteMode,setNoteMode] = useState(false);
    const [error,setError] = useState(false);
    const noteModeToggle = () =>{
        setNoteMode(true);
    }
    const onAddHandler = () =>{
        if(ctx.noteRef.current.innerText.trim().length < 1) {
            setError(true); 
            return;
        }
        setError(false);
        ctx.addToNoteList(ctx.titleRef.current.value,ctx.noteRef.current.innerText)
        ctx.noteRef.current.innerText="";
        ctx.titleRef.current.value="";
    }

    const onClearHandler = ()=>{
        ctx.noteRef.current.innerText="";
        ctx.titleRef.current.value="";
        setError(false);
    }
    return (
            <div className={classes.noteArea}>
                <div className={classes.inputBox}>
                    <input ref={ref.titleRef} onClick={noteModeToggle} placeholder='Title' className={classes.noteTitle}></input>
                    <i onClick={()=>setNoteMode(false)} className="fas fa fa-solid fa-close"></i>
                </div>
                <div ref={ref.noteRef} spellCheck="true" contentEditable="true" data-text="Take a note..." className={noteMode? `${classes.textArea}`:`${classes.textAreaHidden}`}>
                </div>
                {noteMode&&error&&<p className={classes.noteError}>Please write a valid note!</p>}
                <div className={noteMode?`${classes.noteBtnWrapper}`:`${classes.noteBtnWrapperHidden}`}>
                    <button onClick={onClearHandler} className={classes.noteBtn}>Clear</button>
                    <button onClick={onAddHandler} className={classes.noteBtn}>Done</button>
                </div>
            </div>
            )
}
)

export default NoteArea;
