import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  return (
    <section
      className="relative h-[35rem] overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      <BackgroundAnimation />

      <div className="relative z-10 flex items-center justify-center top-10 h-full text-white">
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {/* Image */}
          <div className="grid gap-4 justify-center">
            <img
              src="/eloillustration.jpg"
              alt="Illustration IA d'Elodie"
              className="max-w-xs w-full h-auto rounded-xl shadow-lg"
            />

            <div className="flex justify-center gap-4">
              {/* Icônes */}
              <span className="w-8 h-8 bg-blue-500 rounded-full"></span>
              <span className="w-8 h-8 bg-red-500 rounded-full"></span>
              <span className="w-8 h-8 bg-green-500 rounded-full"></span>
              <span className="w-8 h-8 bg-yellow-500 rounded-full"></span>
            </div>
          </div>

          {/* Texte */}
          <div className="grid grid-cols-1 gap-y-6 place-content-center">
            <h1 className="text-4xl font-bold">Hey, I'm Elodie!</h1>
            <h2 className="text-2xl font-semibold">
              Junior front-end developer, UI/UX enthusiast, and design lover.
            </h2>
            <p className="text-lg">
              Always exploring, always improving — and yes, blue is my signature
              color (emote)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
