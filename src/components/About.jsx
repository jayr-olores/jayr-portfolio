import profile from "../assets/profile.svg";
import { CheckCircle, Download, MailPlus } from "lucide-react";
import {
  SiKotlin,
  SiAndroidstudio,
  SiGradle,
  SiReact,
  SiNodedotjs,
  SiDotnet,
  SiPostman,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiHuggingface,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa6";

function About() {
  const N8nIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" // ✅ inherit text color, can override with Tailwind
      className={className} // ✅ allows w-12 h-12, text-pink-500, etc.
      role="img"
    >
      <title>n8n</title>
      <path
        fill="#EA4B71"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8.4c0 1.325-1.102 2.4-2.462 2.4-1.146 0-2.11-.765-2.384-1.8h-3.436c-.602 0-1.115.424-1.214 1.003l-.101.592a2.38 2.38 0 01-.8 1.405c.412.354.704.844.8 1.405l.1.592A1.222 1.222 0 0015.719 15h.975c.273-1.035 1.237-1.8 2.384-1.8 1.36 0 2.461 1.075 2.461 2.4S20.436 18 19.078 18c-1.147 0-2.11-.765-2.384-1.8h-.975c-1.204 0-2.23-.848-2.428-2.005l-.101-.592a1.222 1.222 0 00-1.214-1.003H10.97c-.308.984-1.246 1.7-2.356 1.7-1.11 0-2.048-.716-2.355-1.7H4.817c-.308.984-1.246 1.7-2.355 1.7C1.102 14.3 0 13.225 0 11.9s1.102-2.4 2.462-2.4c1.183 0 2.172.815 2.408 1.9h1.337c.236-1.085 1.225-1.9 2.408-1.9 1.184 0 2.172.815 2.408 1.9h.952c.601 0 1.115-.424 1.213-1.003l.102-.592c.198-1.157 1.225-2.005 2.428-2.005h3.436c.274-1.035 1.238-1.8 2.384-1.8C22.898 6 24 7.075 24 8.4zm-1.23 0c0 .663-.552 1.2-1.232 1.2-.68 0-1.23-.537-1.23-1.2 0-.663.55-1.2 1.23-1.2.68 0 1.231.537 1.231 1.2zM2.461 13.1c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm6.153 0c.68 0 1.231-.537 1.231-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm10.462 3.7c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.23.537-1.23 1.2 0 .663.55 1.2 1.23 1.2z"
      />
    </svg>
  );

  const OpenAIIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25" // ✅ smaller viewBox so scaling is natural
      fill="currentColor" // ✅ makes it inherit text color
      className={className} // ✅ allows w-12 h-12 control
      role="img"
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );

  const CSharpIcon = ({ className = "w-12 h-12" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 288" // keep the original coordinate system
      className={className} // Tailwind handles sizing
    >
      <path
        d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
        fill="#A179DC"
      />
      <path
        d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376"
        fill="#280068"
      />
      <path
        d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
        fill="#390091"
      />
      <path
        d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z"
        fill="#FFFFFF"
      />
      <path
        d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z"
        fill="#FFFFFF"
      />
    </svg>
  );

  return (
    <>
      <section id="about" className="w-11/12 md:w-4/5 mx-auto py-48">
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
              <p className="text-gray-500 font-bold mt-1">Software Developer</p>
            </div>
          </div>
          {/* Right: About Me Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hi, I’m Jayr — a passionate developer with experience in building
              web and mobile solutions using React.js, Node.js, Firebase, C#,
              ASP.NET, and Android Studio. I enjoy turning ideas into practical
              applications that make a real impact. <br /> <br /> I’m always
              eager to learn new technologies, solve challenging problems, and
              collaborate with others to create efficient and user-friendly
              solutions. Whether it’s front-end interfaces or back-end logic, I
              aim to write clean, maintainable code that delivers value. <br />
              <br /> Outside of coding, I’m driven by curiosity and continuous
              growth — always looking for opportunities to refine my craft and
              contribute to meaningful projects.
            </p>
            {/* Passions Section */}
            <h2 className="text-2xl font-bold mb-4">
              What I'm Passionate About:
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-green-600 w-5 h-5" /> Building
                user-friendly web applications
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-green-600 w-5 h-5" /> Continuous
                learning and self-improvement
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-green-600 w-5 h-5" /> Solving
                real-world problems with technology
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#008cff] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-600 transition"
              >
                <MailPlus className="w-5 h-5" /> {/* Icon */}
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1XCp514_5QudyD1mmm5vGHSHGVgfC2Q1r/view?usp=sharing"
                className="flex items-center justify-center gap-2 border border-[#008cff] text-[#008cff] px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-50 transition"
              >
                <Download className="w-5 h-5" /> {/* Icon */}
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="w-11/12 md:w-4/5 mx-auto relative">
        {/* Category: Mobile Development */}
        <h3 className="text-xl font-semibold mb-6 text-center">
          📱 Mobile Development
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12 justify-center">
          {[
            {
              icon: <SiKotlin className="text-5xl text-purple-500" />,
              name: "Kotlin",
            },
            {
              icon: <FaJava className="text-5xl text-red-600" />,
              name: "Java",
            },
            {
              icon: <SiAndroidstudio className="text-5xl text-green-600" />,
              name: "Android Studio",
            },
            {
              icon: <SiGradle className="text-5xl text-gray-700" />,
              name: "Gradle",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-xl transition"
            >
              {tech.icon}
              <span className="text-gray-800 font-medium mt-3 text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* 🌐 Web Development */}
        <h3 className="text-xl font-semibold mb-6 text-center">
          🌐 Web Development
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12 justify-center">
          {[
            {
              icon: <SiReact className="text-5xl text-sky-500" />,
              name: "React.js",
            },
            {
              icon: <SiNodedotjs className="text-5xl text-green-600" />,
              name: "Node.js",
            },
            {
              icon: (
                <CSharpIcon className="text-5xl text-indigo-600 w-12 h-12" />
              ),
              name: "C#",
            },
            {
              icon: <SiDotnet className="text-5xl text-purple-600" />,
              name: "ASP.NET",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-xl transition"
            >
              {tech.icon}
              <span className="text-gray-800 font-medium mt-3 text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* 🔧 APIs & Tools */}
        <h3 className="text-xl font-semibold mb-6 text-center">
          🔧 APIs & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12 justify-center">
          {[
            {
              icon: <SiPostman className="text-5xl text-orange-500" />,
              name: "Postman",
            },
            {
              icon: <SiFirebase className="text-5xl text-yellow-500" />,
              name: "Firebase",
            },
            {
              icon: <FaDatabase className="text-5xl text-red-700" />,
              name: "Microsoft SQL Server",
            },
            {
              icon: <SiMongodb className="text-5xl text-green-700" />, // ✅ MongoDB
              name: "MongoDB",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-xl transition"
            >
              {tech.icon}
              <span className="text-gray-800 font-medium mt-3 text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Category: AI & Automation */}
        <h3 className="text-xl font-semibold mb-6 text-center">
          🤖 AI & Automation
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {[
            {
              icon: <SiPython className="text-yellow-500 w-12 h-12" />,
              name: "Python",
            },
            {
              icon: <SiHuggingface className="text-yellow-400 w-12 h-12" />,
              name: "Hugging Face",
            },
            {
              icon: <OpenAIIcon className="text-black w-12 h-12" />,
              name: "OpenAI",
            },
            {
              icon: <N8nIcon className="text-pink-500 w-12 h-12" />,
              name: "n8n",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white shadow-lg p-8 rounded-2xl hover:scale-105 hover:shadow-xl transition"
            >
              {tech.icon}
              <span className="text-gray-800 font-medium mt-3 text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
