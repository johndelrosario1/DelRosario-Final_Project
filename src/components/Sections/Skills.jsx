import React, { useEffect, useRef } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import MeImage from '../../assets/images/me.png'; // Import the image

const Skills = ({ isDarkMode }) => {
  const skillsData = [
    { name: 'Programming', percentage: 35 },
    { name: 'Creative Thinking', percentage: 60 },
    { name: 'Photography', percentage: 50 },
    { name: 'Online Games', percentage: 90 },
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    progressRefs.current.forEach((bar, index) => {
      const percentage = skillsData[index].percentage;
      bar.style.width = `${percentage}%`;
    });
  }, [skillsData]);

  return (
    <section
      id="skills"
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
          Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full">
            <div className="mb-8">
              <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </h4>
                      <div className="bg-gray-300 dark:bg-gray-700 rounded-full h-6 relative overflow-hidden">
                        <div
                          className={`rounded-full h-6 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                            isDarkMode
                              ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          } hover:scale-105`}
                          style={{ width: '0%' }}
                          ref={(el) => (progressRefs.current[index] = el)}
                        >
                          <span className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-sm font-semibold">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Experience
              </h3>
              <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Eager to Contribute and Learn
                  </h4>
                  <p className={`text-gray-500 mb-4 ${isDarkMode ? 'text-gray-400' : ''}`}>
                    Currently Seeking Opportunities
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    As an aspiring web developer, I am currently building my foundational skills and actively seeking opportunities to gain real-world experience. While I don't have formal professional experience in the field yet, I am highly motivated and eager to contribute my enthusiasm and growing knowledge to the development world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300">
            <img
              src={MeImage} // Use the imported image
              alt="Your Profile"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;