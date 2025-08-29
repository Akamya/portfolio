import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  return (
    <section className="relative h-auto md:h-[38rem]">
      <BackgroundAnimation />

      <div className="relative text-white flex items-center justify-center min-h-full pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {/* Image */}
          <div className="grid gap-4 justify-center">
            <img
              src="/eloillustration.jpg"
              alt="Illustration IA d'Elodie"
              className="max-w-[12rem] md:max-w-xs w-full h-auto rounded-xl shadow-lg mx-auto"
            />

            <div className="flex justify-center gap-4">
              {/* Icônes */}
              <span className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full"></span>
              <span className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full"></span>
              <span className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full"></span>
              <span className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full"></span>
            </div>
          </div>

          {/* Texte */}
          <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 place-content-center text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Hey, I'm Elodie!</h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Junior front-end developer, UI/UX enthusiast, and design lover.
            </h2>
            <p className="text-base md:text-lg">
              Always exploring, always improving — and yes, blue is my signature
              color ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
