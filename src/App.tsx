import "./App.css";
import Navbar from "./components/Navbar";
import { BackgroundBoxes } from "./components/ui/background-boxes";

function App() {
  return (
    <>
      <div className="absolute inset-0 sm:block overflow-hidden">
        <BackgroundBoxes />
      </div>
      <main className="z-10 max-w-xl mx-auto px-6 mt-6 relative">
        <Navbar />
        <section>intro</section>
      </main>
    </>
  );
}

export default App;
