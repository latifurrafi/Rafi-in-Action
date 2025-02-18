import React from 'react';

function ProjectCard({ title, description, tech, image, url, githubUrl }) {
  return (
    <div className="glass-card p-3 rounded-xl overflow-hidden shadow-lg transition-all hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80"} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech && tech.map((item, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
            >
              View Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;