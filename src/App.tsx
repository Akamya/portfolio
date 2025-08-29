import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;
