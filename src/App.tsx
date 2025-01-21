import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <StarsBackground />
      <ShootingStars maxSpeed={10} starWidth={20} starHeight={10} />
      <motion.main
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-xl mx-auto px-6 mt-6 relative flex flex-col gap-16"
      >
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </motion.main>
    </>
  );
}

export default App;
