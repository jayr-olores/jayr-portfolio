import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // adjust for header height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-11/12 md:w-4/5 mx-auto flex items-center justify-between py-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <nav className="hidden md:flex gap-8 lg:gap-10">
          {["home", "about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`font-medium transition-colors ${
                activeSection === link
                  ? "text-[#008cff]"
                  : "text-[#828282] hover:text-[#008cff]"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        {/* Right: Status (desktop only) */}
        <div className="hidden md:block text-green-600 font-semibold text-sm md:text-base">
          Available
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 flex flex-col items-center gap-6">
          {["home", "about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                activeSection === link
                  ? "text-[#008cff]"
                  : "text-[#828282] hover:text-[#008cff]"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <div className="text-green-600 font-semibold text-lg mt-4">
            Available
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
