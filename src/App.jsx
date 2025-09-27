import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Goals from "./components/Goals";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
       <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="goals">
          <Goals />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
