import type { FC } from 'react';
import './Experience.css';

const Experience: FC = () => {
  const experiences = [
    {
      role: 'Full Stack Developer (Freelance)',
      company: 'Remote',
      duration: 'July 2025 - Present',
      description: [
        'Creating small-scale systems with AI integration.',
        'Managing team leadership from system design to business logic.',
        'Satisfying clients with high-quality solutions and after-sales support.'
      ]
    },
    {
      role: 'Elixir Developer',
      company: 'Hawks Tech',
      duration: 'July 2025 - Nov 2025 | Lahore, PK',
      description: [
        'Reverse engineered systems to trace and fix inconsistencies.',
        'Resolved small to medium sized bugs and developed new features.',
        'Enhanced UI/UX for complex features like file uploading.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Soft Steer Global Technology',
      duration: 'Oct 2024 - Jan 2025 | Lahore, PK',
      description: [
        'Mastered HTML, CSS, and JavaScript under senior mentorship.',
        'Tested internal tools and provided comprehensive technical reports.',
        'Conducted research and competitor analysis for strategic projects.'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-card">
                <h3>{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                <ul className="description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
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

export default Experience;
