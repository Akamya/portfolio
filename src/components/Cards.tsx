import { Card } from "../components/Card";

export const Cards = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-6 py-16">
      {/* Titres */}
      <div className="text-left mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
          PORTFOLIO
        </h1>
        <h2 className="text-4xl font-light text-gray-900 tracking-wide">
          A selection of stuff I've built
        </h2>
      </div>

      {/* Grid des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 max-w-6xl mx-auto">
        <Card
          title="Portfolio Website"
          description="A modern portfolio website built with React + Tailwind."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
        <Card
          title="TFT Challenge Generator"
          description="A challenge generator for the game Teamfight Tactics."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
        <Card
          title="E-commerce UI"
          description="A responsive e-commerce interface prototype."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
        <Card
          title="E-commerce UI"
          description="A responsive e-commerce interface prototype."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
        <Card
          title="E-commerce UI"
          description="A responsive e-commerce interface prototype."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
        <Card
          title="E-commerce UI"
          description="A responsive e-commerce interface prototype."
          image="https://via.placeholder.com/400x250"
          link="#"
          github="#"
        />
      </div>
    </section>
  );
};
