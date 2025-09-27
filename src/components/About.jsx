import profile from "../assets/profile.svg";
import { CheckCircle } from "lucide-react"; // ✅ import check icon

function About() {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-20">
      {/* Grid: Profile + About Me */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center">
          <img
            src={profile}
            alt="Profile"
            className="w-[440px] h-[440px] object-cover rounded-t-2xl mt-20"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Jay-r</h2>
            <p className="text-gray-500 font-medium mt-1 font-bold">
              Aspiring Software Developer
            </p>
          </div>
        </div>

        {/* Right: About Me Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Hi, I’m Jayr — a passionate developer with experience in building
            web and mobile solutions using React.js, Node.js, Firebase, C#,
            ASP.NET, and Android Studio. I enjoy turning ideas into practical
            applications that make a real impact.
            <br />
            <br />
            I’m always eager to learn new technologies, solve challenging
            problems, and collaborate with others to create efficient and
            user-friendly solutions. Whether it’s front-end interfaces or
            back-end logic, I aim to write clean, maintainable code that
            delivers value.
            <br />
            <br />
            Outside of coding, I’m driven by curiosity and continuous growth —
            always looking for opportunities to refine my craft and contribute
            to meaningful projects.
          </p>

          {/* Passions Section */}
          <h2 className="text-2xl font-bold mb-4">
            What I'm Passionate About:
          </h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-green-600 w-5 h-5" />
              Building user-friendly web applications
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-green-600 w-5 h-5" />
              Continuous learning and self-improvement
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="text-green-600 w-5 h-5" />
              Solving real-world problems with technology
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="bg-gray-100 text-blue-600 px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-200 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
