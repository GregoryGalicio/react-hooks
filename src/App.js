//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Header  from './componets/Header.jsx'
import Characters  from './componets/Characters'
import Footer from './componets/Footer'


function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className={`${darkMode?"AppDark":"App"}`}>
      <Header onClick={handleClick} darkMode={darkMode}/>
      <Characters darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
