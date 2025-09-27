import heroImage from "../assets/hero-image.svg";
import { Download, FolderOpen } from "lucide-react"; // 👈 icons

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
        <div className="relative w-[32rem] h-[32rem] flex items-center justify-center">
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
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto md:mx-0">
        {/* Experience Card */}
        <div className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            EXPERIENCE
          </h3>
          <ul className="space-y-3 text-gray-600 font-medium">
            <li className="flex justify-between">
              <span>Years Active</span>
              <span className="text-gray-900 font-semibold">2+</span>
            </li>
            <li className="flex justify-between">
              <span>Projects Done</span>
              <span className="text-gray-900 font-semibold">15+</span>
            </li>
            <li className="flex justify-between">
              <span>Happy Clients</span>
              <span className="text-gray-900 font-semibold">5+</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Java
            </span>
            <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              React
            </span>
            <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Node.js
            </span>
            <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              ASP.NET
            </span>
            <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Kotlin
            </span>
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Postman
            </span>
            <span className="bg-slate-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              ChatGPT
            </span>
            <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              n8n
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
