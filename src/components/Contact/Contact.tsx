import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Twitter = Send;
import './Contact.css';

const Contact: FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="glitch-text">Let's Vibe?</h2>
              <p>Whether you want to build a SaaS, hire me, or just share some goofy tech reels - I'm in!</p>
              
              <div className="social-pill-container">
                <motion.a 
                  href="https://instagram.com/mustafayapss" 
                  target="_blank"
                  className="social-pill insta"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Send /> @mustafayapss
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/mustafawk" 
                  target="_blank"
                  className="social-pill linked"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Twitter /> LinkedIn
                </motion.a>
              </div>

              <div className="contact-meta">
                <div className="meta-item"><Mail size={18} /> mustafawkhan5@gmail.com</div>
                <div className="meta-item"><Phone size={18} /> +92 303 4311348</div>
                <div className="meta-item"><MapPin size={18} /> Lahore, PK</div>
              </div>
            </div>

            <form className="goofy-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <textarea placeholder="Tell me something cool (or a joke)" rows={4} required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Message <Send size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
