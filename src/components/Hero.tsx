import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  const medias = [
    {
      name: "GitHub",
      icon: "devicon-github-plain",
      url: "https://github.com/Akamya",
    },
    { name: "LinkedIn", icon: "devicon-linkedin-plain", url: "" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-[42rem] pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <BackgroundAnimation />

      <div className="relative text-gray-100 flex flex-col md:flex-row items-center justify-center min-h-full px-6 md:px-8 gap-12 md:gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 ">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src="/eloillustration.jpg"
              alt="Illustration IA d'Elodie"
              className="relative max-w-[14rem] md:max-w-sm w-full h-auto rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            />
          </div>

          <div className="flex justify-center gap-2">
            {medias.map((media) => (
              <a
                key={media.name}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 transition-all duration-300 hover:scale-110"
              >
                <i
                  className={`${media.icon} text-2xl md:text-3xl text-gray-100 transition-all duration-300 
                   group-hover:text-transparent group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400`}
                ></i>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent leading-tight">
              Hey, I'm Elodie!
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-blue-100 leading-relaxed">
              Junior front-end developer, UI/UX enthusiast, and design lover.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            Always exploring, always improving — and I love cats 🐱
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden "
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
