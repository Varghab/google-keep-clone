import React from 'react';
import classes from './UtilityIcon.module.css';

function UtilityIcon(props) {
    
    return (
        <div className={classes.utilityWrapper}>
            <i className={`${"fas fa-solid fa-grip-lines"} ${classes.utilityIcon}`}></i>
            <i className={`${"fa fa-light fa-gear"} ${classes.utilityIcon}`}></i>
            <i onClick={props.darkModeToggler} className={`${"fa fa-light fa-sun"} ${classes.utilityIcon}`}></i>
        </div>
    )
}

export default UtilityIcon
