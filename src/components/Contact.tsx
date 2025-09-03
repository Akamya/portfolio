export const Contact = () => {
  return (
    <section className="max-w-6xl w-full mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Colonne gauche = Texte */}
        <div>
          <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
            CONTACT
          </h1>
          <h2 className="text-4xl font-light text-gray-900 tracking-wide mb-4">
            Interested? Let’s have a chat!
          </h2>
          <a
            href="mailto:elodie.langlet@gmail.com"
            className="text-2xl md:text-3xl font-bold text-[#032230] hover:text-[#05405c] underline underline-offset-4 transition-colors"
          >
            elodie.langlet@gmail.com
          </a>
        </div>

        {/* Colonne droite = Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/eloandtaiga.jpeg"
            alt="Contact Illustration"
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
