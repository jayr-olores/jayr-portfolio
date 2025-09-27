import heroImage from "../assets/hero-image.svg";

function Home() {
  return (
    <section
      id="home"
        className="pt-24 w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
    >
      {/* Left: Text */}
      <div className="space-y-6 text-center md:text-left">
        {/* Large Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black leading-tight">
          Hi! I’m <span className="text-[#008cff]">Jay-r</span>,
        </h1>

        {/* Small Heading */}
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-black leading-snug">
          I build web apps, mobile apps <br className="hidden sm:block" />
          and automation workflows
        </h2>

        {/* Body Text */}
        <p className="text-[#828282] max-w-md mx-auto md:mx-0 text-sm sm:text-base">
          An aspiring software developer with a passion for creating efficient and
          user-friendly digital solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#"
            className="bg-[#008cff] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-600 transition"
          >
            Download CV
          </a>
          <a
            href="#"
            className="border border-[#008cff] text-[#008cff] px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-50 transition"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="flex justify-center order-first md:order-none">
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl flex items-center justify-center">
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Cards */}
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto md:mx-0">
        <div className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Card Title 1
          </h3>
          <p className="text-[#828282] text-sm sm:text-base">
            Short description or feature info goes here.
          </p>
        </div>
        <div className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Card Title 2
          </h3>
          <p className="text-[#828282] text-sm sm:text-base">
            Another card with some details or highlight.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
