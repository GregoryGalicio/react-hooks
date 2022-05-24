import React from 'react'
import "./Toggle.css";

const Toggle = ({onClick,darkMode}) => {
    return (
        <div className={`${darkMode?"toggleDark":"toggle"}`} onClick={onClick}>
            <div className='notch'></div>
            <div>
                <div className='shape sm'></div>
                <div className='shape sm'></div>
                <div className='shape md'></div>
                <div className='shape lg'></div>
            </div>
        </div>
    );
}

export default Toggle;