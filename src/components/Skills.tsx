export const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Vue.js", icon: "/icons/vue.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "HTML/CSS", icon: "/icons/html-css.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Git", icon: "/icons/git.svg" },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="text-lest mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
          SKILLS
        </h1>
        <h2 className="text-4xl font-light text-gray-900 tracking-wide">
          My toolbox & things I can do
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <span className="text-gray-900 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
