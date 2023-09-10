import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaNodeJs,
  FaLaravel,
  FaDatabase
} from "react-icons/fa6";
import Tech from "../components/Tech";

const About = () => {
  return (
    <section className="max-container mt-20 flex flex-col gap-8 lg:flex-row">
      <div className="flex flex-col gap-8 lg:w-2/3">
        <h2 className="h2">
          About
        </h2>
        <p className="text ">
          Hello there! I'm Sohaib, a{" "}
          <strong className="text-purple-500">Fullstack </strong> web developer
          based in Barcelona. I wake up in the morning, grap a cup of timmies
          coffee, open up my laptop and build things that live on the web all
          day, everydat.
        </p>
        <p className="text">
          People who know me say i'm obsessed, that's fair, I am very driven and
          love learning new things.
        </p>
        <hr className="border border-slate-600" />
        <h3 className="text-black dark:text-slate-400 font-extrabold text-base md:text-lg lg:text-2xl">
          Technologies
        </h3>
        <div className="flex justify-between flex-wrap gap-4">
          <ul className="flex flex-col gap-4">
            <Tech Icon={FaJs} label="JavaScript" />
            <Tech Icon={FaHtml5} label="HTML" />
            <Tech Icon={FaCss3} label="CSS" />
          </ul>
          <ul className="flex flex-col gap-4">
            <Tech Icon={FaAngular} label="Angular" />
            <Tech Icon={FaReact} label="React" />
            <Tech Icon={FaBootstrap} label="Bootstrap" />
          </ul>
          <ul className="flex flex-col gap-4">
            <Tech Icon={FaJava} label="Java | Spring Boot" />
            <Tech Icon={FaNodeJs} label="NodeJs | Express" />
            <Tech Icon={FaPhp} label="PHP" />
          </ul>
          <ul className="flex flex-col gap-4">
            <Tech Icon={FaLaravel} label="Laravel" />
            <Tech Icon={FaDatabase} label="MongoDB | MySQL" />
          </ul>
        </div>
      </div>
      <img src="/Sohaib.jpg" alt="developer image" className="w-1/3 object-contain" />
    </section>
  );
};

export default About;
