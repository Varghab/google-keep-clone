import React from 'react';
import classes from './Sidebar.module.css';
function Sidebar(props) {
    return (
            <div className={props.toggleIsValid?`${classes.sidebarWrapper}`:`${classes.sidebarWrapperExtended}`}>
                <div className={classes.sidebarIconWrapper}>
                    <div className={classes.iconBox}>
                        <i className={`${"fas fa fa-solid fa-pencil"} ${classes.sidebarIcons}`}></i>
                        <p className={props.toggleIsValid?`${classes.sidebarInfo}`:`${classes.sidebarInfoExtended}`}>Notes</p>
                    </div>
                    <div className={classes.iconBox}>
                        <i className={`${"fas fa fa-solid fa-folder"} ${classes.sidebarIcons}`}></i>
                        <p className={props.toggleIsValid?`${classes.sidebarInfo}`:`${classes.sidebarInfoExtended}`}>Archieve</p>
                    </div>
                    <div className={classes.iconBox}>
                        <i className={`${"fas fa fa-regular fa-trash"} ${classes.sidebarIcons}`}></i>
                        <p className={props.toggleIsValid?`${classes.sidebarInfo}`:`${classes.sidebarInfoExtended}`}>Trash</p>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar
