import Project from "../components/Project";

const Projects = () => {
  return (
    <section id="Work" className="max-container text-center mt-20">
      <h2 className="h2">
        Projects
      </h2>
      <p className="text max-w-[60ch] text-center mx-auto my-8 ">
        Mollit pariatur tempor nisi dolor non consequat magna cupidatat
        reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo
        deserunt ipsum.
      </p>
      <div>
        <Project reverse={false}/>
        <Project reverse={true} />
      </div>
    </section>
  );
};

export default Projects;
