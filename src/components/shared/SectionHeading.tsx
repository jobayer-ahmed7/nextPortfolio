const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden py-4 my-12">
      {/* Background faded text */}
      <h1 className="absolute text-6xl md:text-8xl  font-extrabold text-classicGold opacity-10 z-30 select-none">
        {title}
      </h1>

      {/* Foreground visible text */}
      <h2 className="text-4xl lg:text-5xl font-bold z-40">
        <span className="text-white">{title}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
