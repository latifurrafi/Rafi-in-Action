import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Chat-Bot",
    description: "A chatbot built using Python and Flask, powered by Generative AI with Gemini-1.5-Flash.It's leverages AI models to understand user queries and generate human-like replies. Perfect for customer support, automation, or personal assistance.",
    tech: ["Python", "Flask", "Generative-Ai", "Gemini-1.5-flash"],
    image: "src/components/chatbot.webp",
    githubUrl: "https://github.com/latifurrafi/ChatBot"
  },

  {
    title: "Shopping Cart For E-Commerce",
    description: "A shopping cart system built with HTML, CSS, and JavaScript. This application includes complete form validations, ensuring a smooth and error-free user experience. It also features a promo code and allowing users to apply discounts dynamically for e-commerce platforms.",
    tech: ["HTML", "CSS", "JavaScript", "Lucide"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/latifurrafi/Shopping_Cart"
  },

  {
    title: "Password Manager",
    description: "A efficient password manager built using Python and CSV files for storing user credentials. This tool allows users to securely add, retrieve, delete, and list passwords with a straightforward text interface. It ensures that usernames are unique and provides basic error handling to manage common issues like non-existing usernames or duplicate entries.",
    tech: ["Python", "CSV", "CLI"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/latifurrafi/Project/blob/main/Project_With_Python/MyKeyVault.py"
  },

  {
    title: "Weapon-Detection",
    description: "Weapon-Detection is an advanced security solution designed to detect weapons in real-time through computer vision and deep learning techniques. Leveraging the YOLO (You Only Look Once) object detection model, this system can accurately identify firearms and other weapons within video feeds. In case a weapon is detected, the system triggers an alert warning for quick response.",
    tech: ["Python", "Open-cv", "YOLO", "PyGame"],
    image: "src/components/weapon.png",
    githubUrl: "https://github.com/latifurrafi/Weapon_Detection"
  },

  {
    title: "Contact Book Management System",
    description: "A Python-based contact management system that allows users to efficiently add, edit, search, and delete contacts. The system includes email and phone number validation. It also incorporates error handling and exception management. Designed for smooth CRUD operations.",
    tech: ["Python", "CRUD", "CSV"],
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/latifurrafi/Ostad/tree/main/Contact_Book_Management%20_System"
  }

];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#000C66] to-[#050A30]">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-12 flex items-center justify-center'>
            <p className='border-4 border-blue-500/30 max-w-96 px-6 py-3 rounded-2xl text-4xl'>Featured Projects</p>
          </h2>
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