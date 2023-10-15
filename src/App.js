import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <img 
          src={darkMode ? 'C:\Users\Vishu\Desktop\MERN\React JS\reacttask6\public\dark-mode-icon.png' : 'C:\Users\Vishu\Desktop\MERN\React JS\reacttask6\public\light-mode-icon.png'} 
          alt="Mode toggle" 
          onClick={() => setDarkMode(!darkMode)} 
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
