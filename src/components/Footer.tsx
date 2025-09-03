export const Footer = () => {
  const medias = [
    { name: "GitHub", icon: "devicon-github-plain" },
    { name: "LinkedIn", icon: "devicon-linkedin-plain" },
  ];

  return (
    <footer className="bg-[#032230] text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 text-center md:text-left">
        {/* Nom */}
        <p className="text-xl font-bold text-gray-100 tracking-wide">
          Elodie Langlet
        </p>

        {/* Phrase */}
        <p className="text-sm">
          © 2025 | All rights reserved. By Elodie Langlet.
        </p>

        {/* Icônes */}
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
    </footer>
  );
};
