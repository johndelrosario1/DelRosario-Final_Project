import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RevealOnScroll } from '../RevealOnScroll';
import AboutMeImage from '../../public/images/Aboutme.jpg'; // Import the image

export const AboutMe = ({ isDarkMode }) => {
  const facebookURL = ' https://www.facebook.com/frvr.at21';
  const instagramURL = 'https://www.instagram.com/frvr.at21';

  return (
    <section
      id="aboutme"
      className={`py-16 transition-colors duration-700 ${
        isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            isDarkMode ? 'text-purple-700' : 'text-blue-700'
          }`}
        >
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={AboutMeImage} 
              alt="John Manuel Del Rosario"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hi, I'm John Manuel Del Rosario, an aspiring web developer passionate about creating engaging and user-friendly digital experiences. As you can see from my portfolio, I'm focused on building a personal online presence to showcase my journey and skills in the world of web development.
            </p>

            <div className="flex space-x-4">
              {facebookURL && (
                <a
                  href={facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2 ${
                    isDarkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-600 text-blue-600'
                  } transition-colors duration-300`}
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
              )}
              {instagramURL && (
                <a
                  href={instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2 ${
                    isDarkMode ? 'bg-gray-800 hover:bg-purple-600 text-white' : 'bg-gray-200 hover:bg-purple-600 text-purple-600'
                  } transition-colors duration-300`}
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};