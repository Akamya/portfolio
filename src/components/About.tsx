export const About = () => {
  return (
    <section id="about" className="max-w-7xl w-full mx-auto py-20 px-6 ">
      <div className="text-left mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
          <h1 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">
            About Me
          </h1>
        </div>
        <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight">
          Who is{" "}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
            Elodie
          </span>
          ?
        </h2>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1  rounded-3xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <img
              src="/elodielanglet.jpg"
              alt="Photo de moi"
              className="relative rounded-3xl shadow-2xl w-80 h-80 object-cover border-4 border-white"
            />
          </div>
        </div>

        <div className="space-y-6 md:text-left">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
            I'm a curiosity-driven{" "}
            <span className="text-blue-600 font-semibold">
              Front-End Developer
            </span>{" "}
            at the beginning of my journey. ✨
          </h3>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              I enjoy transforming ideas into clean and visually appealing web
              experiences using{" "}
              <span className="font-semibold text-gray-800">
                HTML, CSS, Tailwind, JavaScript, Vue.js and React
              </span>
              .
            </p>
            <p>
              As a recent graduate in Web Development, I'm eager to keep
              learning and improving every day. I may be at the start of my
              career, but I care creating smooth user experiences and making
              things both functional and beautiful.
            </p>
            <p>
              I like to build, experiment, and keep learning new skills. At the
              moment, I'm focused on strengthening my front-end design and
              development abilities, while considering user experience and
              accessibility.
            </p>
            <p>
              I'm open to new opportunities where I can grow as a developer,
              contribute to meaningful projects, and continue building my
              creative and technical skills.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center md:text-left">
            <p className="mb-6 text-lg text-gray-600 font-semibold">
              Let's get straight to the point! 😉
            </p>

            <a
              href="/cv-elodie-langlet.pdf"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-blue-600"
            >
              <span>Download my CV</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
