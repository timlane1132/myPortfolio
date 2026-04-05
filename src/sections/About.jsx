import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a frontend developer focused on building modern, responsive, and
            user-friendly web applications. I enjoy turning ideas into real,
            functional products.
          </p>

          <p>
            I’ve built and deployed multiple projects using React and
            JavaScript, and I’m currently expanding into full-stack development.
            I’m passionate about clean UI, performance, and continuous learning.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-skills">
          <h2>Skills</h2>

          <div className="skill">
            <p>HTML</p>
            <span></span>
          </div>

          <div className="skill">
            <p>CSS</p>
            <span></span>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <span></span>
          </div>

          <div className="skill">
            <p>React</p>
            <span></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
