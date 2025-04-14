import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, toggleTheme }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 ${
        isDarkMode
          ? 'bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-[rgba(245, 245, 245, 0.9)] backdrop-blur-lg border-b border-gray-200 shadow-md'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a>
            My <span className={`font-semibold ${isDarkMode ? 'text-purple-700' : 'text-blue-700'}`}>Portfolio</span>
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'}`}>
              Home
            </a>
            <a href="#aboutme" className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'}`}>
              About
            </a>
            <a href="#education" className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'}`}>
              Education
            </a>
            <a href="#skills" className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'}`}>
              Skills
            </a>
            <a href="#contact" className={`transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'}`}>
              Contact
            </a>
            <button onClick={toggleTheme} className="focus:outline-none">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};