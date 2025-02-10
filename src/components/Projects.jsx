import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Library Management System",
    description: "A application for managing books and users in a library. It allows easy tracking of books, user accounts, and borrowing details with a user-friendly interface.",
    icon: "📚",
    githubUrl: "https://github.com/latifurrafi/Ostad/tree/main/Library_Management_System"
  },

  {
    title: "Password Manager",
    description: "A secure password manager built with Python, providing encrypted storage for user credentials.",
    icon: "🔒",
    githubUrl: "https://github.com/latifurrafi/Project/blob/main/Project_With_Python/MyKeyVault.py"
  },  

  {
    title: "Contact Book Management System",
    description: "A Python-based system for managing contacts with features like adding, editing, and deleting entries.",
    icon: "📇",
    githubUrl: "https://github.com/latifurrafi/Ostad/tree/main/Contact_Book_Management%20_System"
  },
  
  {
    title: "Tic Tac Toe",
    description: "A Python-based projects that plays the classic Tic Tac Toe game.It's can play against a user, making the game both fun and challenging.",
    icon: "🎮",
    githubUrl: "https://github.com/latifurrafi/Project/blob/main/Games/Tic_Tac_Toe.py"
  },

  {
    title: "Youtube Downloader",
    description: "A Python script to download YouTube videos easily by providing a URL.",
    icon: "📥",
    githubUrl: "https://github.com/latifurrafi/Automate_Script/blob/main/YT_Downloder.py"
  }
  
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#000C66] to-[#050A30]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center gradient-text mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;