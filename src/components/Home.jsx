import heroImage from "../assets/hero-image.svg";
import { Download, FolderOpen } from "lucide-react"; // 👈 icons

function Home() {
  return (
    <>
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
            An aspiring software developer with a passion for creating efficient
            and user-friendly digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#008cff] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-600 transition"
            >
              <Download className="w-5 h-5" /> {/* Icon */}
              Download CV
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 border border-[#008cff] text-[#008cff] px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-50 transition"
            >
              <FolderOpen className="w-5 h-5" /> {/* Icon */}
              View Portfolio
            </a>
          </div>
        </div>

        {/* Middle: Hero Image */}
        <div className="relative flex justify-center order-first md:order-none">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[32rem] md:h-[32rem] flex items-center justify-center">
            {/* Orbit Rings */}
            <div className="absolute w-[28rem] h-[28rem] border border-blue-200 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[22rem] h-[22rem] border border-purple-200 rounded-full animate-spin-slower"></div>
            <div className="absolute w-[16rem] h-[16rem] border border-green-200 rounded-full animate-spin-slow"></div>

            {/* Inner Orbit (closer to center) */}
            {/* Java (slow orbit) */}
            <div className="absolute animate-orbit orbit-slow">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                ☕ Java
              </span>
            </div>

            {/* React (medium orbit, delayed) */}
            <div className="absolute animate-orbit orbit-medium orbit-delay-1">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                ⚛ React
              </span>
            </div>

            {/* Node.js (fast orbit, reverse) */}
            <div className="absolute animate-orbit-reverse orbit-fast orbit-delay-2">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                🟢 Node.js
              </span>
            </div>

            {/* ASP.NET (medium, reverse, delayed) */}
            <div className="absolute animate-orbit-reverse orbit-medium orbit-delay-3">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                #️⃣ C# ASP.NET
              </span>
            </div>

            {/* Kotlin */}
            <div className="absolute animate-orbit orbit-fast orbit-delay-1">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                📱 Kotlin
              </span>
            </div>

            {/* Postman */}
            <div className="absolute animate-orbit orbit-medium orbit-delay-2">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                🔗 Postman
              </span>
            </div>

            {/* ChatGPT */}
            <div className="absolute animate-orbit-reverse orbit-slow orbit-delay-1">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                🤖 ChatGPT
              </span>
            </div>

            {/* n8n */}
            <div className="absolute animate-orbit orbit-fast orbit-delay-3">
              <span className="bg-white shadow px-4 py-2 rounded-full text-sm">
                ⚡ n8n
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse absolute top-30 left-10"></div>
          <div className="w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse absolute bottom-30 right-10"></div>
        </div>

        {/* Right: Cards */}
        {/* Experience Card */}
        <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 text-center">
            EXPERIENCE
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {/* Years Active */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm text-center">
              <p className="text-gray-600 text-sm">Years Active</p>
              <p className="text-3xl font-extrabold text-blue-600">0</p>
            </div>

            {/* Projects Done */}
            <div className="bg-purple-50 rounded-xl p-4 shadow-sm text-center">
              <p className="text-gray-600 text-sm">Projects Done</p>
              <p className="text-3xl font-extrabold text-purple-600">4+</p>
            </div>

            {/* Happy Clients */}
            <div className="bg-pink-50 rounded-xl p-4 shadow-sm text-center">
              <p className="text-gray-600 text-sm">Happy Clients</p>
              <p className="text-3xl font-extrabold text-pink-600">0</p>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="w-11/12 md:w-4/5 mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">💻 Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {/* Java */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">☕</span>
            <span className="text-gray-700 font-medium">Java</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">⚛</span>
            <span className="text-gray-700 font-medium">React.js</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">🟢</span>
            <span className="text-gray-700 font-medium">Node.js</span>
          </div>

          {/* C# ASP.NET */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">#️⃣</span>
            <span className="text-gray-700 font-medium">C# ASP.NET</span>
          </div>

          {/* Kotlin */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">📱</span>
            <span className="text-gray-700 font-medium">Kotlin</span>
          </div>

          {/* Postman */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">🔗</span>
            <span className="text-gray-700 font-medium">Postman</span>
          </div>

          {/* ChatGPT */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">🤖</span>
            <span className="text-gray-700 font-medium">ChatGPT</span>
          </div>

          {/* n8n */}
          <div className="flex flex-col items-center gap-3 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <span className="text-4xl">⚡</span>
            <span className="text-gray-700 font-medium">n8n</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
