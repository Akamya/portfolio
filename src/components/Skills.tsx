export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      category: "Frontend",
    },
    { name: "PHP", icon: "devicon-php-plain", category: "Backend" },
    { name: "Vue.js", icon: "devicon-vuejs-plain", category: "Frontend" },
    { name: "React", icon: "devicon-react-original", category: "Frontend" },
    { name: "Laravel", icon: "devicon-laravel-plain", category: "Backend" },
    { name: "MySQL", icon: "devicon-mysql-plain", category: "Database" },
    { name: "RESTful APIs", icon: "fa-solid fa-gears", category: "Backend" },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      category: "Frontend",
    },
    { name: "HTML5", icon: "devicon-html5-plain", category: "Frontend" },
    { name: "CSS3", icon: "devicon-css3-plain", category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      category: "Frontend",
    },
    { name: "WordPress", icon: "devicon-wordpress-plain", category: "CMS" },
    {
      name: "Responsive\nWebsites",
      icon: "fa-solid fa-mobile-screen",
      category: "Frontend",
    },
    { name: "Figma", icon: "devicon-figma-plain", category: "Design" },
    { name: "Photoshop", icon: "devicon-photoshop-plain", category: "Design" },
    { name: "Git", icon: "devicon-git-plain", category: "Tools" },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <h1 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">
              Skills
            </h1>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
              toolbox
            </span>{" "}
            & things I can do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300 group-hover:shadow-md">
                  <i
                    className={`${skill.icon} text-4xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300`}
                  ></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-tight">
                    {skill.name}
                  </p>
                  <span className="text-xs text-gray-500 font-medium mt-1 block">
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
