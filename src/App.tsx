import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

function App() {
  return (
    <>
      <div className="absolute inset-0 sm:block overflow-hidden">
        <StarsBackground />
        <ShootingStars maxSpeed={10} starWidth={20} starHeight={10} />
      </div>
      <main className="z-10 max-w-xl mx-auto px-6 mt-6 relative flex flex-col gap-8">
        <Navbar />
        <About />
      </main>
    </>
  );
}

export default App;
