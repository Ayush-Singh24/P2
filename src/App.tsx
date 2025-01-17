import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BackgroundBoxes } from "./components/ui/background-boxes";

function App() {
  return (
    <>
      {/* <div className="absolute inset-0 sm:block overflow-hidden"> */}
      {/*   <BackgroundBoxes /> */}
      {/* </div> */}
      <main className="z-10 max-w-xl mx-auto px-6 mt-6 relative flex flex-col gap-8">
        <Navbar />
        <About />
      </main>
    </>
  );
}

export default App;
