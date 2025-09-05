export const Footer = () => {
  const medias = [
    {
      name: "GitHub",
      icon: "devicon-github-plain",
      url: "https://github.com/Akamya",
    },
    { name: "LinkedIn", icon: "devicon-linkedin-plain", url: "" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#032230] to-[#05405c] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pb-12 border-b border-white/20">
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            Let's create something{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              amazing
            </span>{" "}
            together
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with
            creative minds.
          </p>
          <a
            href="mailto:elodie.langlet@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <i className="fa-solid fa-envelope"></i>
            Get In Touch
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gray-100 tracking-wide mb-2">
              Elodie Langlet
            </p>
            <p className="text-blue-200 text-sm">
              Front-End Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-blue-200 mb-2">
              © 2025 All rights reserved
            </p>
            <p className="text-xs text-blue-300">Made with ❤️ and lots of 🍵</p>
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
      </div>
    </footer>
  );
};
