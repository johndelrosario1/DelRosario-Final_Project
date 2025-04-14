import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const SERVICE_ID = 'service_z66c1zi';
  const TEMPLATE_ID = 'template_ob3i90p';
  const PUBLIC_KEY = 'YlyQgdKYDU-KgtZKo';

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Something went wrong. Please try again.'));
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 transition-colors duration-700 ${
        isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'
      }`}
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className={`text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center ${
              isDarkMode ? '' : ''
            }`}
          >
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={`w-full border rounded px-4 py-3 transition focus:outline-none focus:border-purple-700 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900/80'
                    : 'bg-white border-gray-300 text-gray-800 focus:bg-gray-50'
                }`}
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={`w-full border rounded px-4 py-3 transition focus:outline-none focus:border-purple-700 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900/80'
                    : 'bg-white border-gray-300 text-gray-800 focus:bg-gray-50'
                }`}
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={`w-full border rounded px-4 py-3 transition focus:outline-none focus:border-purple-700 resize-none ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white focus:bg-gray-900/80'
                    : 'bg-white border-gray-300 text-gray-800 focus:bg-gray-50'
                }`}
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15pxrgba(59,130,246,0.4)] ${
                isDarkMode ? 'bg-purple-500 text-white' : 'bg-purple-700 text-white'
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};