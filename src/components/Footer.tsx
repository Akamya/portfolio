export const Footer = () => {
  return (
    <div className="bg-[#032230] text-white">
      <p>Elodie Langlet</p>
      <div className="flex justify-center gap-4">
        {/* Icônes */}
        <span className="w-8 h-8 bg-blue-500 rounded-full"></span>
        <span className="w-8 h-8 bg-red-500 rounded-full"></span>
        <span className="w-8 h-8 bg-green-500 rounded-full"></span>
        <span className="w-8 h-8 bg-yellow-500 rounded-full"></span>
      </div>
    </div>
  );
};
