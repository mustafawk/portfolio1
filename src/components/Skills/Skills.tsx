import type { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Box, 
  Zap,
  Terminal,
  Search
} from 'lucide-react';
import './Skills.css';

const Skills: FC = () => {
  const skillCategories = [
    {
      title: 'The Languages I Speak',
      icon: <Code2 />,
      skills: [
        { name: 'Python', level: 90, icon: <Terminal size={14} /> },
        { name: 'C++', level: 85, icon: <Cpu size={14} /> },
        { name: 'SQL', level: 80, icon: <Database size={14} /> },
        { name: 'JavaScript', level: 95, icon: <Globe size={14} /> },
        { name: 'React', level: 92, icon: <Box size={14} /> },
        { name: 'Elixir', level: 75, icon: <Zap size={14} /> }
      ]
    },
    {
      title: 'Tools & Magic Tricks',
      icon: <Layers />,
      skills: [
        { name: 'FastAPI', level: 88, icon: <Zap size={14} /> },
        { name: 'Phoenix', level: 70, icon: <Zap size={14} /> },
        { name: 'Docker', level: 80, icon: <Box size={14} /> },
        { name: 'Git', level: 90, icon: <Code2 size={14} /> },
        { name: 'PostgreSQL', level: 85, icon: <Database size={14} /> },
        { name: 'NumPy/Pandas', level: 82, icon: <Search size={14} /> }
      ]
    },
    {
      title: 'Future Overlord Skills (AI)',
      icon: <Cpu />,
      skills: [
        { name: 'PyTorch', level: 65, icon: <Brain size={14} /> },
        { name: 'TensorFlow', level: 60, icon: <Brain size={14} /> },
        { name: 'OpenCV', level: 70, icon: <Search size={14} /> },
        { name: 'LLMs', level: 75, icon: <Sparkles size={14} /> }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item-container">
                    <div className="skill-info">
                      <span className="skill-name">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Mock imports for icons not available in standard lucide-react if needed
const Brain = ({ size }: { size: number }) => <Cpu size={size} />;
const Sparkles = ({ size }: { size: number }) => <Zap size={size} />;

export default Skills;
