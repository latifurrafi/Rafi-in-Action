import React from 'react';

function SkillCard({ title, skills }) {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-transparent border shadow-md shadow-cyan-800 border-blue-600/50 rounded-md text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;