export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <h1 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">
                  Contact
                </h1>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-6">
                Interested? Let's have a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                  chat
                </span>
                !
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or just having a friendly conversation about web
                development.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:elodie.langlet@gmail.com"
                className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-blue-600 hover:text-teal-600 transition-colors duration-300"
              >
                <i className="fa-solid fa-envelope"></i>
                elodie.langlet@gmail.com
              </a>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  Open to full-time
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="/catcoffee.jpg"
                alt="Contact Illustration"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
