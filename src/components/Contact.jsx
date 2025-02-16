import React from 'react';
import { FaGithub, FaLinkedin, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#050A30] to-[#050A30]">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-12 flex items-center justify-center">
          <p className='border-4 border-blue-500/30 max-w-96 px-6 py-3 rounded-2xl text-4xl'>Let's Connect</p>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className='text-[#0077B5] bg-black p-1 rounded'><FaPhoneAlt /></span>
                  <a
                    href="+8801856862093"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    +8801856862093
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className='text-[#0077B5] bg-black p-1 rounded'><IoMdMail /></span>
                  <a href="mailto:latifurrafi@gmail.com" className="hover:text-blue-500 transition-colors">
                    latifurrafi@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className='text-[#0077B5] bg-black p-1 rounded'><FaGithub /></span>
                  <a
                    href="https://github.com/latifurrafi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    GitHub
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className='text-[#0077B5] bg-black p-1 rounded'><FaLinkedinIn /></span>
                  <a
                    href="https://www.linkedin.com/in/md-latifur-rahman-rafi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className='text-[#0077B5] bg-black p-1 rounded'><FaXTwitter /></span>
                  <a
                    href="https://x.com/Rafi_Echoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Twitter
                  </a>
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-white dark:border-gray-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full glow-effect px-6 py-3 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;