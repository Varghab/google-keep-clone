import React from 'react';
import classes from './Search.module.css';

function Search() {
    return (
        <div className={classes.searchWrapper}>
            <input type="text" placeholder='Search'></input>
        </div>
    )
}

export default Search;
