import React from 'react';
import SkillCard from './SkillCard';

const skillsData = [
  {
    title: "Backend Development",
    skills: ["Python", "Django", "Flask", "FastAPI"]
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "PostgreSQL", "MariaDB"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Linux", "SSH", "Adminer"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Data Preprocessing", "ML Algorithms", "Data Science"]
  },
  {
    title: "Other Skills",
    skills: ["C", "C++", "JSON", "Data Structures", "OOP", "API Development"]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#000C66] to-[#000C66]">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-12 flex items-center justify-center">
          <p className='border-4 border-blue-500/30 max-w-96 px-5 py-3 rounded-xl text-4xl'>Skills & Tech Stack</p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;