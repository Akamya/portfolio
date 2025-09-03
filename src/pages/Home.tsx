import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Cards } from "../components/Cards";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <Navbar />
        <Hero />
        <main className="grid justify-center w-full">
          <About />
          <Skills />
          <Cards />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
