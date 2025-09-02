import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  const medias = [
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "linkedIn", icon: "devicon-linkedin-plain" },
  ];

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
              {medias.map((media) => (
                <a
                  key={media.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-400 transition-colors duration-300"
                >
                  <i className={`${media.icon} text-2xl md:text-3xl`}></i>
                </a>
              ))}
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
