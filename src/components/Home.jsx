import { Download, FolderOpen } from "lucide-react";
import { motion } from "framer-motion"; // 👈 import motion

import profileImage from "../assets/profile.svg";

function Home() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-pink-50 flex items-start pt-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black leading-tight">
              Hi! I’m <span className="text-[#008cff]">Jay-r</span>,
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-black leading-snug">
              I build web apps, mobile apps <br className="hidden sm:block" />
              and automation workflows
            </h2>
            <p className="text-[#828282] max-w-md mx-auto md:mx-0 text-sm sm:text-base">
              An aspiring software developer with a passion for creating
              efficient and user-friendly digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="https://drive.google.com/file/d/1XCp514_5QudyD1mmm5vGHSHGVgfC2Q1r/view?usp=sharing"
                className="flex items-center justify-center gap-2 bg-[#008cff] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-600 transition"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 border border-[#008cff] text-[#008cff] px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-50 transition"
              >
                <FolderOpen className="w-5 h-5" />
                View Portfolio
              </a>
            </div>
          </div>

          {/* Middle: Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImage} // 👈 replace with your image file path
              alt="Jay-r"
              className="w-400 h-120 rounded-full border-4 border-[#008cff] shadow-xl object-cover"
            />
          </div>

          {/* Right: Cards */}
          <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 text-center">
              EXPERIENCE
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 shadow-sm text-center">
                <p className="text-gray-600 text-sm">Years Active</p>
                <p className="text-3xl font-extrabold text-blue-600">0+</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 shadow-sm text-center">
                <p className="text-gray-600 text-sm">Projects Done</p>
                <p className="text-3xl font-extrabold text-purple-600">2</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-4 shadow-sm text-center">
                <p className="text-gray-600 text-sm">Happy Clients</p>
                <p className="text-3xl font-extrabold text-pink-600">2</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;
