import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  const medias = [
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "LinkedIn", icon: "devicon-linkedin-plain" },
  ];

  return (
    <section className="relative min-h-screen md:h-[42rem] pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <BackgroundAnimation />

      <div className="relative text-white flex flex-col md:flex-row items-center justify-center min-h-full px-6 md:px-8 gap-12 md:gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 transform hover:scale-105 transition-transform duration-500">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src="/eloillustration.jpg"
              alt="Illustration IA d'Elodie"
              className="relative max-w-[14rem] md:max-w-sm w-full h-auto rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            />
          </div>

          <div className="flex justify-center gap-6">
            {medias.map((media) => (
              <a
                key={media.name}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-100 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <i className={`${media.icon} text-2xl md:text-3xl`}></i>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
            Always exploring, always improving — and yes, blue is my signature
            color ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
