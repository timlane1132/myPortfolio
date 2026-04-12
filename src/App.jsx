import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      {/* STAR BACKGROUND */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
