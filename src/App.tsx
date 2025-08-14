import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <p>Autres sections de mon site...</p>
        <div>test</div>
      </main>
    </>
  );
}

export default App;
