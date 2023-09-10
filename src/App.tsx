import Nav from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Featured from "./sections/Featured";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {

  

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
