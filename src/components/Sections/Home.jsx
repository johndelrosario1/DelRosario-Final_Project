import { useState, useEffect, useCallback } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = ({ isDarkMode }) => {
  const [typedName, setTypedName] = useState('');
  const fullName = 'Hi, I am John Manuel Del Rosario';
  const typingSpeed = 150;

  const startTyping = useCallback(() => {
    setTypedName('');
  }, []);

  useEffect(() => {
    let timer;
    if (typedName.length < fullName.length) {
      timer = setTimeout(() => {
        setTypedName(fullName.substring(0, typedName.length + 1));
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [typedName, fullName]);

  useEffect(() => {
    startTyping();
  }, [startTyping]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      style={{ paddingTop: '64px' }}
    >
      <RevealOnScroll>
      <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4">
        <div className="rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 border-4 shadow-lg" style={{ borderColor: isDarkMode ? '#a855f7' : '#6366f1' }}>
          <img src="src/assets/images/Home Profile.png" alt="Profile" className="object-cover w-full h-full" />
        </div>
        <div className="text-center md:text-left">
          <h1
            className={`text-3xl md:text-5xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent leading-tight ${
              isDarkMode ? 'bg-gradient-to-l from-purple-700 to-indigo-300' : 'bg-gradient-to-l from-blue-700 to-cyan-500'
            }`}
          >
            {typedName}
          </h1>
          <h2 className={`text-xl md:text-2xl mb-4 max-w-2xl mx-auto md:mx-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-700'}`}>
            Aspiring Web Developer
          </h2>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};