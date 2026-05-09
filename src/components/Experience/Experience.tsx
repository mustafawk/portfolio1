import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience: FC = () => {
  const experiences = [
    {
      role: 'Full Stack Developer (Freelance)',
      company: 'Remote Chaos',
      duration: 'July 2025 - Present',
      description: [
        'Scaling systems with AI that actually makes sense.',
        'Led the whole squad from design to deployment.',
        'Keeping clients happy while meeting insane deadlines.'
      ],
      color: 'var(--primary-color)'
    },
    {
      role: 'Elixir Developer',
      company: 'Hawks Tech',
      duration: 'July 2025 - Nov 2025',
      description: [
        'Reverse engineered the matrix to find bugs.',
        'Built functional UI/UX that people actually like using.',
        'Wrangled Elixir-Erlang for production systems.'
      ],
      color: 'var(--secondary-color)'
    },
    {
      role: 'Web Development Intern',
      company: 'Soft Steer Global',
      duration: 'Oct 2024 - Jan 2025',
      description: [
        'Learned the sacred arts of HTML, CSS, and JS.',
        'Tested tools and broke things (then fixed them).',
        'Did the deep research for future projects.'
      ],
      color: 'var(--tertiary-color)'
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          The Grind
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-item"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="experience-dot" style={{ backgroundColor: exp.color }}></div>
              <motion.div 
                className="experience-card"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                style={{ borderLeft: `4px solid ${exp.color}` }}
              >
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <div className="exp-meta">
                    <span><Briefcase size={14} /> {exp.company}</span>
                    <span><Calendar size={14} /> {exp.duration}</span>
                  </div>
                </div>
                <ul className="exp-desc">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
