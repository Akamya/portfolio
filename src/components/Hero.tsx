import { BackgroundAnimation } from "./BackgroundAnimation";

export const Hero = () => {
  return (
    <section
      className="relative h-[35rem] overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      <BackgroundAnimation />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold">Bienvenue</h1>
        <p className="mt-2 text-lg">Hero avec fond coupé en diagonale</p>
      </div>
    </section>
  );
};
