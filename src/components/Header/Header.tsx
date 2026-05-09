import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Terminal as Github, Menu } from 'lucide-react';
import './Header.css';

const Header: FC = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home">
            <Github size={24} className="cool-icon" color="var(--primary-color)" />
            MUSTAFA <span className="last-name">KHAN</span>
          </a>
        </motion.div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Arsenal</a></li>
            <li><a href="#experience">Grind</a></li>
            <li><a href="#projects">Chaos</a></li>
            <li><a href="#contact">Vibe</a></li>
            <li>
              <motion.a 
                href="https://github.com/mustafawk" 
                target="_blank" 
                whileHover={{ scale: 1.2, color: 'var(--primary-color)' }}
                className="github-link"
              >
                <Github size={20} />
              </motion.a>
            </li>
          </ul>
          <button className="mobile-menu-btn">
            <Menu />
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
