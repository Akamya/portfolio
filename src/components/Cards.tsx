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
            description="An interactive web app that lets players generate random challenges to spice up their Teamfight Tactics games. Each challenge includes a class, an origin, and unique constraints, with the option to reroll. Logged-in users can track their scores, view their history, and appear on a leaderboard. Built with Laravel, Vue.js, Inertia, and Tailwind CSS, it combines a solid backend with a modern, responsive UI."
            image="/tftchallenge.jpg"
            link="https://tft-operation.elolan.ovh/"
            github="https://github.com/Akamya/generateur-challenge-tft"
            technologies={["laravel", "vue", "mysql", "api", "tailwind"]}
          />
          <Card
            title="Mini ChatGPT"
            description="A responsive e-commerce interface prototype with modern design patterns and intuitive user experience."
            image="/chatgpt.jpg"
            link="https://project-ai.elolan.ovh/login"
            github=""
            technologies={["laravel", "vue", "mysql", "api", "tailwind"]}
          />
          <Card
            title="Mini Instagram"
            description="A responsive e-commerce interface prototype with modern design patterns and intuitive user experience."
            image="/miniinstagram.jpg"
            link="https://mini-instagram.elolan.ovh/"
            github="https://github.com/Akamya/laravel-mini-instagram"
            technologies={["laravel", "mysql", "tailwind"]}
          />
          <Card
            title="CatCrocs e-commerce"
            description="A beautiful weather application with location-based forecasts and interactive data visualizations."
            image="/catshoes.jpg"
            link="https://js-ecommerce-project.vercel.app/produits"
            github="https://github.com/Akamya/js_ecommerce_project"
            technologies={["javascript", "css"]}
          />
          <Card
            title="CatCrocs"
            description="A productivity app with drag-and-drop functionality, real-time updates, and collaborative features."
            image="/catcrocs.jpg"
            link="http://minisite.elolan.ovh/"
            github="https://github.com/Akamya/catcrocs"
            technologies={["javascript", "css"]}
          />
          <Card
            title="Recipe Finder"
            description="A recipe discovery platform with advanced search filters, favorites system, and meal planning features."
            image="https://via.placeholder.com/400x250/10B981/FFFFFF?text=Recipe+Finder"
            link="#"
            github="#"
            technologies={["javascript", "css"]}
          />
        </div>
      </div>
    </section>
  );
};
