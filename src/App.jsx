import React, { useState } from 'react';
import "./index.css";
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Home } from './components/Sections/Home';
import { AboutMe } from'./components/Sections/AboutMe';
import Education from './components/Sections/Education';
import Skills from './components/Sections/Skills';
import { Contact } from './components/Sections/Contact';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark/light mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-colors duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${isDarkMode ? "bg-black text-gray-100" : "bg-white text-gray-800"}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Home isDarkMode={isDarkMode} />
        <AboutMe isDarkMode={isDarkMode}/>
        <Education isDarkMode={isDarkMode}/>
        <Skills isDarkMode={isDarkMode}/>
        <Contact isDarkMode={isDarkMode}/>
      </div>
    </>
  );
}

export default App;