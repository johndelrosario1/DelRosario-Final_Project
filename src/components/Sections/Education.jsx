import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import cert1 from '../../public/images/cert1.jpg';
import cert2 from '../../public/images/cert2.jpg';
import cert3 from '../../public/images/cert3.jpg';
import cert4 from '../../public/images/cert4.jpg';
import cert5 from '../../public/images/cert5.jpg';
import cert6 from '../../public/images/cert6.jpg';
import cert7 from '../../public/images/cert7.jpg';

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      degree: 'Academic Track-STEM',
      institution: 'Baguio City National High School',
      years: '2021 - 2023',
      certificates: [
        cert1,
        cert2,
        cert3,
        cert4,
      ],
    },
    {
      degree: 'Junior High',
      institution: 'Baguio City National High School',
      years: '2020 - 2021',
      certificates: [
        cert5,
        cert6,
      ],
    },
    {
      degree: 'Elementary',
      institution: 'Dontogan Elementary School',
      years: '2017',
      certificates: [
        cert7,
      ],
    },
  ];

  return (
    <section
      id="education"
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
          Education
        </h2>

        {educationData.map((education, index) => (
          <div key={index} className="mb-12">
            <div className="rounded-xl shadow-lg overflow-hidden">
              <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                <p className={`text-gray-500 mb-2 ${isDarkMode ? 'text-gray-400' : ''}`}>
                  {education.institution}
                </p>
                <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-400' : ''}`}>
                  {education.years}
                </p>

                {education.certificates && education.certificates.length > 0 && (
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Certificates
                    </h4>
                    <div className="overflow-x-auto whitespace-nowrap -ml-4 -mr-4">
                      <div className="inline-flex space-x-4 pl-4 pr-4">
                        {education.certificates.map((certificate, certIndex) => (
                          <img
                            key={certIndex}
                            src={certificate}
                            alt={`Certificate for ${education.degree}`}
                            className="w-48 h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Education;