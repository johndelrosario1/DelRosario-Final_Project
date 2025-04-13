import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
