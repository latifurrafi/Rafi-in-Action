import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#050A30] to-[#000C66]">
      <div className="container mx-auto px-6">
        <div className="text-3xl font-bold text-center gradient-text mb-12 flex items-center justify-center">
          <p className='border-4 border-blue-500/30 max-w-64 px-5 py-3 rounded-xl text-4xl'>About Me</p>
        </div>
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
          <div className="prose dark:prose-invert">
            <p className="text-sm md:text-xl lg:text-1xl mb-6 text-gray-700 dark:text-gray-300">
              Computer Science student with 3+ years of experience in software engineering.
              Passionate about clean, modular code, scalable architectures, and AI-driven solutions.
              Strong background in backend development, database management, and API design.
            </p>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Professional Strengths</h3>
            <ul className="text-sm md:text-xl lg:text-1xl list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li>Quick learner and problem solver with an analytical mindset.</li>
              <li>Smart hard worker capable of mastering complex subjects.</li>
              <li>Experienced in software engineering best practices, teamwork, and collaboration.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Work & Learning History</h3>
            <ul className="text-sm md:text-xl lg:text-1xl list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Studied Computer Science</li>
              <li>3+ years of experience in Software Engineering</li>
              <li>Currently exploring Machine Learning, AI, and Data Science</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;