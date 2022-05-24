import React, { useState,useEffect } from 'react';
import "./Characters.css";

const Characters = ({darkMode}) => {
    const [characters, setCharacters]= useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, [])


    return (
        <div className={darkMode?'charactersDark':"characters" }>
            {characters.map(character =>(
                <div className={darkMode?'charactersBoxDark':'charactersBox'}>
                    <div className='information'>
                        <h2 className='name'>{character.name}</h2>
                        <h2>*{character.status}-{character.species}</h2>
                        <h3>Last known location:</h3>
                        <h2>{character.origin.name}</h2>
                        <h3>First seen in:</h3>
                        <h2>{character.location.name}</h2>
                    </div>
                    <a href={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`} target="_blank" rel="noreferrer">
                    <img className="imgCharacter" alt={character.img} src={character.image}/>
                    </a>
                </div>
                
                
            ))}
            
        </div>
    );
}

export default Characters;
