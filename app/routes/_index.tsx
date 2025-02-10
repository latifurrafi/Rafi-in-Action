import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Md. Latifur Rahman Rafi - Software Engineer" },
    { 
      name: "description", 
      content: "Software Engineer specializing in Backend Development, API Design, and Machine Learning" 
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold gradient-text">
              LR<span>Rafi</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Md. Latifur Rahman Rafi
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Software Engineer | Backend Developer | Machine Learning Enthusiast
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Building scalable APIs, writing clean code, and exploring AI-driven solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="/resume.pdf"
                  className="glow-effect px-6 py-3 bg-gradient-primary text-white rounded-lg transition-all hover:scale-105"
                >
                  📄 Download Resume
                </a>
                <a
                  href="#contact"
                  className="glow-effect px-6 py-3 border border-blue-400 dark:border-blue-500 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gradient-secondary hover:text-white hover:border-transparent transition-all hover:scale-105"
                >
                  📩 Let's Connect
                </a>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="aspect-square rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/20">
                <img
                  src="/profile.jpg"
                  alt="Md. Latifur Rahman Rafi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <div className="prose dark:prose-invert">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Computer Science student with 3+ years of experience in software engineering.
                Passionate about clean, modular code, scalable architectures, and AI-driven solutions.
                Strong background in backend development, database management, and API design.
              </p>
              <h3 className="text-xl font-semibold mb-4 gradient-text">Professional Strengths</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Quick learner and problem solver with an analytical mindset.</li>
                <li>Smart hard worker capable of mastering complex subjects.</li>
                <li>Experienced in software engineering best practices, teamwork, and collaboration.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-4 gradient-text">Work & Learning History</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>Studied Computer Science</li>
                <li>5+ years of experience in Software Engineering</li>
                <li>Currently exploring Machine Learning, AI, and Data Science</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Skills & Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Backend Development"
              skills={["Python", "Django", "Flask", "FastAPI"]}
            />
            <SkillCard
              title="Frontend Development"
              skills={["HTML", "CSS", "JavaScript", "React"]}
            />
            <SkillCard
              title="Databases"
              skills={["MySQL", "SQLite", "PostgreSQL", "MariaDB"]}
            />
            <SkillCard
              title="DevOps & Tools"
              skills={["Docker", "Git", "Linux", "SSH", "Adminer"]}
            />
            <SkillCard
              title="Machine Learning & AI"
              skills={["Data Preprocessing", "ML Algorithms", "Data Science"]}
            />
            <SkillCard
              title="Other Skills"
              skills={["C", "C++", "JSON", "Data Structures", "OOP", "API Development"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Crypto Trading Bot"
              description="Automated crypto trading system analyzing real-time charts"
              icon="📈"
              githubUrl="https://github.com/latifurrafi/crypto-trading-bot"
            />
            <ProjectCard
              title="Library Management System"
              description="Full-stack app for book & user management"
              icon="📚"
              githubUrl="https://github.com/latifurrafi/library-management"
            />
            <ProjectCard
              title="Password Manager"
              description="Secure credential storage using encryption"
              icon="🔑"
              githubUrl="https://github.com/latifurrafi/password-manager"
            />
            <ProjectCard
              title="Machine Learning Projects"
              description="Datathon participation & ML model development"
              icon="🤖"
              githubUrl="https://github.com/latifurrafi/ml-projects"
            />
            <ProjectCard
              title="Tic Tac Toe AI"
              description="Python-based AI for classic Tic Tac Toe game"
              icon="🎮"
              githubUrl="https://github.com/latifurrafi/tictactoe-ai"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Let's Connect
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 gradient-text">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span>📧</span>
                    <a href="mailto:latifurrafi@gmail.com" className="hover:text-blue-500 transition-colors">
                      latifurrafi@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span>🔗</span>
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
                    <span>💼</span>
                    <a
                      href="https://www.linkedin.com/in/md-latifur-rahman-rafi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
              <div className="glass-card p-8 rounded-xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-gray-800/50 dark:border-gray-600"
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
                      className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-gray-800/50 dark:border-gray-600"
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
                      className="mt-1 block w-full rounded-lg bg-white/10 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 dark:bg-gray-800/50 dark:border-gray-600"
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

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Md. Latifur Rahman Rafi. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ using Remix & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 gradient-text">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  icon,
  githubUrl,
}: {
  title: string;
  description: string;
  icon: string;
  githubUrl: string;
}) {
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