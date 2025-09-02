import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Card } from "../components/Card";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="grid justify-center w-full">
        <About />
        <Skills />
        <div className=" px-6 py-16 grid items-center justify-center p-2">
          <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
            PORTFOLIO
          </h1>
          <h2 className="text-4xl font-light text-gray-900 tracking-wide">
            A selection of stuff I've built
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              title="Portfolio Website"
              description="Un site portfolio moderne avec React + Tailwind."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
            <Card
              title="TFT Challenge Generator"
              description="Un générateur de défis pour le jeu Teamfight Tactics."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
            <Card
              title="E-commerce UI"
              description="Un prototype d'interface e-commerce responsive."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
            <Card
              title="E-commerce UI"
              description="Un prototype d'interface e-commerce responsive."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
            <Card
              title="E-commerce UI"
              description="Un prototype d'interface e-commerce responsive."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
            <Card
              title="E-commerce UI"
              description="Un prototype d'interface e-commerce responsive."
              image="https://via.placeholder.com/400x250"
              link="#"
              github="#"
            />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
