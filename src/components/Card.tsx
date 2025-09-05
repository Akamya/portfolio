import type React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies?: string[];
};

// Technology icon components
const TechIcon = ({ tech }: { tech: string }) => {
  const icons: Record<string, React.ReactElement> = {
    react: <i className="devicon-react-original text-white"></i>,
    laravel: <i className="devicon-laravel-plain text-white"></i>,
    tailwind: <i className="devicon-tailwindcss-original text-white"></i>,
    vue: <i className="devicon-vuejs-plain text-white"></i>,

    javascript: <i className="devicon-javascript-plain text-white"></i>,
    typescript: <i className="devicon-typescript-plain text-white"></i>,
    php: <i className="devicon-php-plain text-white"></i>,
    mysql: <i className="devicon-mysql-original text-white"></i>,
    api: <i className="fa-solid fa-gears text-white"></i>,
    css: <i className="devicon-css3-plain"></i>,
  };

  return (
    <div
      className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 text-white"
      style={{ backgroundColor: "rgba(3, 34, 48, 0.9)" }}
      title={tech}
    >
      {icons[tech.toLowerCase()] || (
        <span className="text-xs font-semibold text-white uppercase">
          {tech.slice(0, 2)}
        </span>
      )}
    </div>
  );
};

export const Card = ({
  title,
  description,
  image,
  link,
  github,
  technologies = [],
}: CardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-xl drop-shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <TechIcon tech={tech} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex gap-3 pt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-gray-800 text-white text-sm font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
