import type { FC } from 'react';
import './Projects.css';

const Projects: FC = () => {
  const projects = [
    {
      title: 'AI Powered Business Card Reader',
      duration: 'March 2026 - Present',
      tech: 'Python, FastAPI',
      highlights: [
        'Developed a quick API utilizing free tools for efficient data extraction.',
        'System reads all fields from business cards and returns them as JSON.',
        'Currently enhancing with a personalized model for better request handling.'
      ]
    },
    {
      title: 'AI Fraud Detection System',
      duration: 'Nov 2025 - Dec 2025',
      tech: 'Python, FastAPI, React, PostgreSQL, Hugging Face',
      highlights: [
        'Built a full web interface for a bank with transaction capabilities.',
        'Implemented secure JWT authentication with cookie storage.',
        'Fine-tuned AI models to identify potential fraudulent transactions.'
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-duration">{project.duration}</p>
                <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
