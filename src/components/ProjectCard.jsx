import React from 'react';

function ProjectCard({ title, description, icon, githubUrl }) {
  return (
    <div className="glass-card p-6 rounded-xl transition-all hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
      >
        View on GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;