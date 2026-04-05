import "../styles/contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>Contact Me</h2>
        <p>Let’s work together or just say hello 👋</p>

        <div className="contact-links">
          <a href="mailto:your@email.com">Email</a>
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
