import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex justify-center w-full">
        <Skills />
      </main>
    </>
  );
}

export default App;
