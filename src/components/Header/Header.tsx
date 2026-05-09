import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as Github, Menu, X } from 'lucide-react';
import './Header.css';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Grind', href: '#experience' },
    { name: 'Chaos', href: '#projects' },
    { name: 'Vibe', href: '#contact' },
  ];

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
          <ul className="nav-list desktop-only">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
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
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={toggleMenu}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="https://github.com/mustafawk" target="_blank" onClick={toggleMenu}>
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
