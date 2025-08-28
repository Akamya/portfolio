export const About = () => {
  return (
    <section className="max-w-6xl w-full mx-auto py-16 px-6">
      <div className="text-left mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
          ABOUT
        </h1>
        <h2 className="text-4xl font-light text-gray-900 tracking-wide">
          Who is Elodie?
        </h2>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr]">
        {/* Colonne gauche = Image */}
        <div className="flex justify-start">
          <img
            src="/images/moi.jpg"
            alt="Photo de moi"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Colonne droite = Paragraphe */}
        <div className=" md:text-left max-w-xl">
          <h2 className="text-2xl font-light mb-4">
            I'm a curiosity-driven Front-End Developer at the beginning of my
            journey. ✨
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I enjoy transforming ideas into clean and visually appealing web
            experiences using HTML, CSS, Tailwind, JavaScript, Vue.js and React.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a recent graduate in Web Development, I’m eager to keep learning
            and improving every day. I may be at the start of my career, but I
            care creating smooth user experiences and making things both
            functional and beautiful.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I like to build, experiment, and keep learning new skills. At the
            moment, I’m focused on strengthening my front-end design and
            development abilities, while considering user experience and
            accessibility.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m open to new opportunities where I can grow as a developer,
            contribute to meaningful projects, and continue building my creative
            and technical skills.
          </p>
          <div className="mt-8 text-center md:text-left">
            <p className="mb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Not into reading the whole bio?
            </p>

            <a
              href="/cv-elodie-langlet.pdf"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-teal-400 hover:to-blue-500"
            >
              Get my CV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
