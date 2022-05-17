//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Header  from './componets/Header.jsx'
import Characters  from './componets/Characters'


function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className="App">
      <Header onClick={handleClick} darkMode={darkMode}/>
      <Characters darkMode={darkMode}/>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
