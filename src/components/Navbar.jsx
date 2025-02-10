import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="text-xl font-bold gradient-text">
            <span>Home</span>
          </a>
          <div className="flex justify-center space-x-6 sm:space-x-8 lg:space-x-12">
            <a
              href="#about"
              className="text-sm duration-300 ease-in font-semibold text-gray-700 dark:text-gray-300 
             hover:text-blue-500 focus:text-blue-500 
             dark:hover:text-blue-400 dark:focus:text-blue-400 
             border-b-2 border-transparent 
             hover:border-blue-500 focus:border-blue-500 
             dark:hover:border-blue-400 dark:focus:border-blue-400 
             transition-all"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm duration-300 ease-in font-semibold text-gray-700 dark:text-gray-300 
             hover:text-blue-500 focus:text-blue-500 
             dark:hover:text-blue-400 dark:focus:text-blue-400 
             border-b-2 border-transparent 
             hover:border-blue-500 focus:border-blue-500 
             dark:hover:border-blue-400 dark:focus:border-blue-400 
             transition-all"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm duration-300 ease-in font-semibold text-gray-700 dark:text-gray-300 
             hover:text-blue-500 focus:text-blue-500 
             dark:hover:text-blue-400 dark:focus:text-blue-400 
             border-b-2 border-transparent 
             hover:border-blue-500 focus:border-blue-500 
             dark:hover:border-blue-400 dark:focus:border-blue-400 
             transition-all"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm duration-300 ease-in font-semibold text-gray-700 dark:text-gray-300 
             hover:text-blue-500 focus:text-blue-500 
             dark:hover:text-blue-400 dark:focus:text-blue-400 
             border-b-2 border-transparent 
             hover:border-blue-500 focus:border-blue-500 
             dark:hover:border-blue-400 dark:focus:border-blue-400 
             transition-all"
            >
              Contacts
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;