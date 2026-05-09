import type { FC } from 'react';
import './Contact.css';

const Contact: FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's talk about your next project</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:mustafawkhan5@gmail.com">mustafawkhan5@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+92 303 4311348</span>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://linkedin.com/in/mustafawk" target="_blank" rel="noopener noreferrer">linkedin.com/in/mustafawk</a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <a href="https://github.com/mustafawk" target="_blank" rel="noopener noreferrer">github.com/mustafawk</a>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
