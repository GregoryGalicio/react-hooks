import React, { useState,useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import "./Header.css";

const Header = ({onClick, darkMode}) => {
   
    return (
        <div className={`${darkMode?"darkHeader":"Header"}`}>
            <h1>RICK&MORTY<br/> with ReactHooks</h1>
            <button className={`${darkMode? 'dark':'light'}`} type="button" onClick={onClick}>{darkMode? 'Light Mode':'Dark Mode'}</button>
            <button className={`${darkMode? 'dark':'light'}`} type="button" onClick={onClick}>{darkMode? 'Light Mode 2':'Dark Mode 2'}</button>
        </div>
    );
}

export default Header; 
