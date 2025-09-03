import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  const medias = [
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "LinkedIn", icon: "devicon-linkedin-plain" },
  ];

  return (
    <section className="relative min-h-screen md:h-[38rem] pt-20 pb-16 md:pt-32 md:pb-24">
      <BackgroundAnimation />

      <div className="relative text-white flex flex-col md:flex-row items-center justify-center min-h-full px-6 md:px-0 gap-12 md:gap-16">
        {/* Image */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/eloillustration.jpg"
            alt="Illustration IA d'Elodie"
            className="max-w-[12rem] md:max-w-xs w-full h-auto rounded-xl shadow-lg"
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
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left max-w-xl">
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
    </section>
  );
};
