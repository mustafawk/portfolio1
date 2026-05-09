import type { FC } from 'react';
import './Skills.css';

const Skills: FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'SQL', 'JavaScript', 'React', 'Elixir-Erlang']
    },
    {
      title: 'Libraries & Tools',
      skills: ['NumPy', 'Pandas', 'FastAPI', 'Phoenix', 'Git', 'Docker']
    },
    {
      title: 'Growth Areas',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'AWS', 'Kubernetes', 'odoo']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
