import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll to update background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section on page load (hash)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80; // height of header
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main
        className="relative w-full min-h-screen transition-all duration-500"
        style={{
          background: `linear-gradient(135deg,
            hsl(${200 + scrollY / 20}, 100%, 95%),
            hsl(${220 + scrollY / 30}, 100%, 90%),
            hsl(${300 + scrollY / 40}, 100%, 95%)
          )`,
        }}
      >
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
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
