import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#050A30]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Md.Latifur Rahman Rafi
            </h1>
            <h2 className="text-sm md:text-1xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer | Backend Developer | Machine Learning Enthusiast
            </h2>
            <p className="text-sm md:text-xl lg:text-1xl text-gray-600 dark:text-gray-400 mb-8">
              Building scalable APIs, writing clean code, and exploring AI-driven solutions.
            </p>
            <div className="flex flex-col md:flex-row  gap-4">
              <a
                href="/public/Latifur_Rahman_Resume.pdf"
                download="Latifur_Rahman_Resume.pdf"
                className="text-sm glow-effect px-6 py-3 bg-gradient-primary text-white rounded-lg transition-all hover:scale-105 flex justify-center items-center gap-1"
              >
               <span className='text-cyan-500 text-lg'> <IoIosDocument /></span>Download Resume
              </a>
                
              <a
                href="#contact"
                className="text-sm glow-effect px-6 py-3 border border-blue-400 dark:border-blue-500 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gradient-secondary hover:text-white hover:border-transparent transition-all hover:scale-105 flex justify-center items-center"
              >
                 Let's Connect
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="aspect-square rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/20">
              <img
                src="https://i.ibb.co.com/Y762V1N2/fbp1wj.jpg"
                alt="Md. Latifur Rahman Rafi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;