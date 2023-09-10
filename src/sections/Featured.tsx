const Featured = () => {
  return (
    <section className="max-container mt-20">
      <div>
        <h3 className="text-purple-500 text-base md:text-lg lg:text-xl font-semibold">
          Featured Project
        </h3>
        <h2 className="h2">
          NutriDish
        </h2>
      </div>
      <p className="text max-w-[60ch] my-6">
        Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
        voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
        consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
        do aliquip nulla laboris.
      </p>
      <div className="flex justify-between flex-wrap gap-4">
        <div>
          <h3 className="mb-2 h3">
            Tech Stack
          </h3>
          <ul className="text">
            <li>React</li>
            <li>Axios</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 h3">
            Project Type
          </h3>
          <ul className="text">
            <li>Fullstack</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 h3">
            Timeline
          </h3>
          <ul className="text">
            <li>1 August 2023 - 25 August 2023</li>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-2 mt-8">
        <div className="relative group">
          <img src="/NutriDish/1.png" alt="project image" className=""/>
          <div className="absolute top-0 left-0 w-full h-full bg-[#4f46e566] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
        <div className="relative group">
          <img src="/NutriDish/2.png" alt="project image" className=""/>
          <div className="absolute top-0 left-0 w-full h-full bg-[#4f46e566] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
        <div className="relative group">
          <img src="/NutriDish/3.png" alt="project image" className=""/>
          <div className="absolute top-0 left-0 w-full h-full bg-[#4f46e566] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
        <div className="relative group">
          <img src="/NutriDish/4.png" alt="project image" className=""/>
          <div className="absolute top-0 left-0 w-full h-full bg-[#4f46e566] bg-opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
