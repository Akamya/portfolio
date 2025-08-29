export const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "devicon-javascript-plain " },
    { name: "PHP", icon: "devicon-php-plain " },
    { name: "Vue.js", icon: "devicon-vuejs-plain " },
    { name: "React", icon: "devicon-react-original " },
    { name: "Laravel", icon: "devicon-laravel-plain " },
    { name: "MySQL", icon: "devicon-mysql-plain " },
    { name: "RESTful APIs", icon: "fa-solid fa-gears" },
    { name: "TypeScript", icon: "devicon-typescript-plain " },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "WordPress", icon: "devicon-wordpress-plain " },
    { name: "Responsive\nWebsites", icon: "fa-solid fa-mobile-screen" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "Photoshop", icon: "devicon-photoshop-plain" },
    { name: "Git", icon: "devicon-git-plain" },
  ];

  return (
    <section className="flex flex-col justify-center min-h-screen px-6 py-16 ">
      <div className="text-lest mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
          SKILLS
        </h1>
        <h2 className="text-4xl font-light text-gray-900 tracking-wide">
          My toolbox & things I can do
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center space-y-3"
          >
            <i className={`${skill.icon} text-6xl`}></i>
            <p className="text-lg font-medium text-gray-800 whitespace-pre-line">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
