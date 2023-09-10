const Project = ({reverse}: {reverse: boolean}) => {
  return (
    <div className="grid place-items-center max-sm:gap-4 sm:grid-cols-2 max-sm:mb-4">
      <div className={`relative group ${reverse && "sm:odd:order-1"} sm:h-[400px]`}>
        <img src="/NutriDish/2.png" alt="project image" className="h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#4f46e566] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 px-4">
        <h3 className="mb-2 capitalize h3">
          Wax Motif
        </h3>
        <p className="text text-slate-400">
          Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim
          pariatur deserunt do ad exercitation.
        </p>
        <button className="btn">Website</button>
      </div>
    </div>
  );
};

export default Project;
