import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-blue-100 text-gray-800 flex justify-center">
        {/* Container centré horizontalement, largeur max */}
        <div className="w-full max-w-3xl mx-auto px-6 py-16 bg-white ">
          <h1 className="text-4xl font-bold mb-4 mt-20 text-center">
            Looking for my CV ?
          </h1>
          <h2 className="text-lg text-gray-600 mb-12 text-center">
            Who am I ?
          </h2>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">🧩 My quick story</h2>
              <p className="leading-relaxed text-gray-700">
                Since I was a kid, I’ve always been drawn to the digital world —
                from spending hours playing video games to customizing my
                Skyblog about them, and slowly discovering how code made it all
                possible. I didn’t grow up in one place — moving countries every
                two years taught me how to adapt quickly, become resourceful and
                independent. At first, I thought I’d go into web design — I’ve
                always loved creating things that look good and feel smooth. But
                I chose to study web development instead, to give myself broader
                opportunities and the skills to bring ideas to life from start
                to finish.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">💻 As a developer</h2>
              <p className="leading-relaxed text-gray-700">
                I'm a junior front-end developer who enjoys building clean and
                user-friendly interfaces. I pay attention to details — not just
                in how things look, but in how they feel to use. I like working
                with modern tools that help me keep things simple and
                structured.Right now, I mostly use Vue.js for my projects, and
                I'm constantly exploring better ways to write maintainable and
                clear code. I might be at the beginning of my journey, but I’m
                not afraid to face challenges. I’m curious, I stay focused, and
                I grow with every project I work on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                🎨 As a creative person
              </h2>
              <p className="leading-relaxed text-gray-700">
                I’ve always been into tech, games, and have an interest on
                digital art. Creating is part of who I am — whether it’s
                designing a page on Figma, tweaking a layout, or imagining how a
                user will interact with a site. I’m not trying to reinvent the
                web — I just want to make it a little more beautiful, one
                interface at a time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">👥 As a teammate</h2>
              <p className="leading-relaxed text-gray-700">
                I’m a calm and independent person who likes to work with focus
                and clarity. I tend to solve things on my own and I ask for help
                when it’s really needed. While I’m not the most talkative by
                nature, I’m respectful, attentive, and always open to feedback.
                In a healthy and positive team environment, I adapt easily and
                naturally connect with others. I care about doing things well
                and being a reliable part of the team — even if I work quietly.
                I may not have years of experience (yet), but I want to bring a
                fresh perspective, a positive mindset, and a real hunger to
                improve.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
