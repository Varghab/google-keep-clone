import React, { useContext } from 'react';
import classes from './Notes.module.css';
import NoteContext from '../../store/note-context';

function Notes(props) {
    const ctx = useContext(NoteContext);
    const colorSelectHandler =(id, e)=>{
        const colors = {
            red:"rgb(251, 217, 217)",
            yellow:"rgb(251, 250, 217)",
            green:"rgb(220, 251, 217)",
            blue:"rgb(217, 248, 251)",
            violet:"rgb(219, 217, 251)",
            purple:"rgb(244, 217, 251)"
        }
        const color = e.target.innerText;
        const reqColor = colors[color];
        ctx.setBackgroundColor(id, reqColor);
    }

    return (
        <div style={{"backgroundColor":props.color}} className={classes.NoteCard}>
            {props.type==="others"&&<img alt='unpin' onClick={()=>props.onPinHandler(props.id)} className={`${classes.pin}`} src="https://img.icons8.com/material-outlined/24/000000/pin.png"></img>}
            {props.type==="pin"&&<img alt='pin' onClick={()=>props.onUnPinHandler(props.id)} className={`${classes.unpin}`} src="https://img.icons8.com/material/24/000000/pin.png"></img>}
            <p className={classes.noteTitle}>{props.title}</p>
            <div className={classes.noteDescription}>
                <p>{props.note}</p>
            </div>
            <div className={classes.backgroundWrapper}>
                <span name="red" onClick={(e) => colorSelectHandler(props.id, e)}>red</span>
                <span name="yellow" onClick={(e) => colorSelectHandler(props.id, e)}>yellow</span>
                <span name="green" onClick={(e) => colorSelectHandler(props.id, e)}>green</span>
                <span name="blue" onClick={(e) => colorSelectHandler(props.id, e)}>blue</span>
                <span name="violet" onClick={(e) => colorSelectHandler(props.id, e)}>violet</span>
                <span name="purple" onClick={(e) => colorSelectHandler(props.id, e)}>purple</span>
            </div>
        </div>
    )
    }


export default Notes;
