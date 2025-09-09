import { Card } from "./Card";

export const Cards = () => {
  return (
    <section id="portfolio" className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <h1 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">
              Portfolio
            </h1>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            A selection of stuff I've{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
              built
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Here are some projects that showcase my skills for creating
            functional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          <Card
            title="TFT Challenge Generator"
            description="An interactive web app that generates random challenges to spice up Teamfight Tactics games, with automatic validation."
            image="/tftchallenge.jpg"
            link="https://tft-operation.elolan.ovh/"
            github="https://github.com/Akamya/generateur-challenge-tft"
            technologies={["laravel", "vue", "mysql", "api", "tailwind"]}
          />
          <Card
            title="Mini ChatGPT"
            description="A web interface prototype that lets users chat with free AI models, featuring contextual conversations and custom commands."
            image="/chatgpt.jpg"
            link="https://project-ai.elolan.ovh/login"
            github="https://github.com/Akamya/mini-chatgpt"
            technologies={["laravel", "vue", "mysql", "api", "tailwind"]}
          />
          <Card
            title="Mini Instagram"
            description="A social media prototype with core features such as posts, comments, likes, and follow functionality."
            image="/miniinstagram.jpg"
            link="https://mini-instagram.elolan.ovh/"
            github="https://github.com/Akamya/laravel-mini-instagram"
            technologies={["laravel", "mysql", "tailwind"]}
          />
          <Card
            title="Mini Ticketmaster - Taylor Swift"
            description="My first designed static landing page project. This project helped me practice visual design and clean HTML/CSS implementation."
            image="/ticketmaster.jpg"
            link="https://ticketmaster-ts.vercel.app/"
            github="https://github.com/Akamya/ticketmasterTS"
            technologies={["html", "css"]}
          />
          <Card
            title="CatShoes e-commerce"
            description="A simple e-commerce app featuring product listings, filters, a search engine, and shopping cart management."
            image="/catshoes.jpg"
            link="https://js-ecommerce-project.vercel.app/produits"
            github="https://github.com/Akamya/js_ecommerce_project"
            technologies={["javascript", "css"]}
          />
          <Card
            title="Pokédex Explorer"
            description="Built a basic Vue.js app using the PokéAPI, featuring loading state management and error handling."
            image="/pokemon.jpg"
            link="https://pokedex-elolan.vercel.app/"
            github="https://github.com/Akamya/pokemon"
            technologies={["vue", "api", "tailwind"]}
          />
        </div>
      </div>
    </section>
  );
};
