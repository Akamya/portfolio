import { Card } from "./Card";

export const Cards = () => {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <h1 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">
              Portfolio
            </h1>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-4">
            A selection of stuff I've{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
              built
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Here are some projects that showcase my skills and passion for
            creating beautiful, functional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          <Card
            title="Portfolio Website"
            description="A modern portfolio website built with React + Tailwind CSS, featuring smooth animations and responsive design."
            image="https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Portfolio"
            link="#"
            github="#"
          />
          <Card
            title="TFT Challenge Generator"
            description="An interactive challenge generator for Teamfight Tactics with dynamic content and engaging user interface."
            image="https://via.placeholder.com/400x250/14B8A6/FFFFFF?text=TFT+Generator"
            link="#"
            github="#"
          />
          <Card
            title="E-commerce UI"
            description="A responsive e-commerce interface prototype with modern design patterns and intuitive user experience."
            image="https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=E-commerce"
            link="#"
            github="#"
          />
          <Card
            title="Task Management App"
            description="A productivity app with drag-and-drop functionality, real-time updates, and collaborative features."
            image="https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Task+Manager"
            link="#"
            github="#"
          />
          <Card
            title="Weather Dashboard"
            description="A beautiful weather application with location-based forecasts and interactive data visualizations."
            image="https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Weather+App"
            link="#"
            github="#"
          />
          <Card
            title="Recipe Finder"
            description="A recipe discovery platform with advanced search filters, favorites system, and meal planning features."
            image="https://via.placeholder.com/400x250/10B981/FFFFFF?text=Recipe+Finder"
            link="#"
            github="#"
          />
        </div>
      </div>
    </section>
  );
};
