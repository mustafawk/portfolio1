import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ShieldAlert } from 'lucide-react';

const Github = Terminal;
import './Projects.css';

const Projects: FC = () => {
  const projects = [
    {
      title: 'Business Card Oracle',
      subtitle: 'AI/ML Project',
      icon: <Terminal className="proj-icon" />,
      duration: 'March 2026 - Present',
      tech: ['Python', 'FastAPI', 'AI Models'],
      description: 'An API that basically eats business cards and vomits structured JSON. Magic? No, just good code.',
      color: 'var(--primary-color)'
    },
    {
      title: 'The Fraud Buster',
      subtitle: 'Full Stack + AI',
      icon: <ShieldAlert className="proj-icon" />,
      duration: 'Nov 2025 - Dec 2025',
      tech: ['React', 'PostgreSQL', 'HuggingFace'],
      description: 'Built a bank interface so good it makes real banks cry. Also detects fraud with AI because trust issues.',
      color: 'var(--secondary-color)'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Things I Built
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-accent" style={{ background: project.color }}></div>
              <div className="project-content">
                <div className="project-header">
                  {project.icon}
                  <div>
                    <h3>{project.title}</h3>
                    <p className="subtitle">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">#{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a whileHover={{ x: 5 }} href="#"><Github size={20} /> Repo</motion.a>
                  <motion.a whileHover={{ x: 5 }} href="#"><ExternalLink size={20} /> Live</motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
