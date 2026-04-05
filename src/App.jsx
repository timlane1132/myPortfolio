import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
