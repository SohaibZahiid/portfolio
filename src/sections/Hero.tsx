const Hero = () => {
  return (
    <section id="About" className="max-container mt-8 flex flex-col justify-center items-center gap-8">
      <img
        src="/Sohaib.jpg"
        alt="developer image"
        width={200}
        className="rounded-full"
      />
      <h2 className="text-slate-800 text-lg md:text-2xl xl:text-4xl font-extrabold text-center">Hi, I'm Sohaib 👋</h2>
      <h1 className="h1 text-center">Full-stack Web Developer.</h1>
      <p className="text text-center max-w-[60ch]">
        A passionate <strong className="text-purple-500 ">Fullstack</strong> web developer and <strong>UI/UX </strong> 
        enthusiast specialized in building stunning pixel-perfect interactive
        websites/applications.
      </p>
      <a href="#Contact" className="btn">Reach Out</a>
    </section>
  );
};

export default Hero;
