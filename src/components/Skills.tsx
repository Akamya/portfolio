export const Skills = () => {
  return (
    <section className="max-w-6xl w-full mx-auto py-16 px-6">
      <div className="relative z-10">
        <h1 className="text-center text-4xl font-light text-gray-900 mb-16 tracking-wide">
          My Skills
        </h1>

        <div className="space-y-8">
          {/* Ligne 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {["JavaScript", "PHP", "Vue.js", "React", "Laravel"].map(
              (skill) => (
                <div
                  key={skill}
                  className="px-6 py-6 bg-gray-50 border border-gray-200 rounded-2xl text-center font-medium text-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 min-h-[60px] flex items-center justify-center"
                >
                  {skill}
                </div>
              )
            )}
          </div>

          {/* Ligne 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {["Laravel", "SQL", "TypeScript", "HTML/CSS", "Tailwind"].map(
              (skill) => (
                <div
                  key={skill}
                  className="px-6 py-6 bg-gray-50 border border-gray-200 rounded-2xl text-center font-medium text-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 min-h-[60px] flex items-center justify-center"
                >
                  {skill}
                </div>
              )
            )}
          </div>

          {/* Ligne 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {["WordPress", "Figma", "Photoshop", "Git"].map((skill) => (
              <div
                key={skill}
                className="px-6 py-6 bg-gray-50 border border-gray-200 rounded-2xl text-center font-medium text-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 min-h-[60px] flex items-center justify-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>I love being creative (emote)</h2>
        <p>
          I started creating blogs about online games when I was 12. Since then,
          I've had a soft spot for creative design and developed a curiosity for
          programming.
        </p>
        <a href="">Keep reading my bio →</a>
      </div>
    </section>
  );
};
