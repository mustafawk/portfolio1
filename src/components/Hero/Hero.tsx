import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Sparkles } from 'lucide-react';

const Brain = Sparkles;
const Instagram = Terminal;
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="floating-symbols">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="symbol"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              {i % 2 === 0 ? <Code2 size={40} /> : <Terminal size={40} />}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 10 }}
        >
          <motion.div 
            className="goofy-badge"
            whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
          >
            <Sparkles className="icon-pulse" /> Just another human debugging life
          </motion.div>
          
          <h1 className="hero-title">
            Yo, I'm <span className="glitch-text">Mustafa</span>
          </h1>
          
          <div className="typewriter-container">
            <p className="hero-subtitle">
              Building things that <span className="underline">actually</span> work (mostly)
            </p>
          </div>

          <p className="hero-description">
            Full Stack Dev by day, AI experimenter by night, and professional goofball 24/7. 
            Currently creating SaaS projects and making tech reels that make sense.
          </p>

          <div className="hero-cta">
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the Chaos
            </motion.a>
            <motion.a 
              href="https://instagram.com/mustafayapss" 
              target="_blank"
              className="btn btn-insta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} /> @mustafayapss
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <div className="visual-container">
            <motion.div 
              className="orbiting-icons"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="orbit-icon"><Cpu color="var(--primary-color)" /></div>
              <div className="orbit-icon"><Brain color="var(--secondary-color)" /></div>
              <div className="orbit-icon"><Sparkles color="var(--tertiary-color)" /></div>
            </motion.div>
            <div className="center-orb">
              <span className="orb-text">&lt;/&gt;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
