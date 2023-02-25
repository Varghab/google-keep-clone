import React from 'react';
import classes from './Header.module.css';
import Search from '../UI/Search';
import UtilityIcon from '../UI/UtilityIcon';

function Header(props) {
    
    return (
        <div className={classes.headerWrapper}>
            <i onClick={props.onHamToggle} className={`${"fas fa-solid fa-bars"} ${classes.hamburger}`}></i>
            <Search />
            <UtilityIcon darkModeToggler={props.darkModeToggler} />
        </div>
    )
}

export default Header;
