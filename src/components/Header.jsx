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
        const sectionTop = section.offsetTop - 250; // adjust for header
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
    ${
      activeSection === "home"
        ? "md:bg-transparent md:shadow-none bg-white shadow-md"
        : "bg-white shadow-md"
    }
  `}
    >
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
        {/* Hamburger / Close button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
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

          {/* pinging Available for mobile */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-600 font-semibold">Available</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
