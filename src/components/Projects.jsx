import portfolio from "../assets/portfolio.png";

function Projects() {
  return (
    <section id="projects" className="w-11/12 md:w-4/5 mx-auto py-20">
      {/* Section Header */}
      <div className="text-center mb-12 mt-24">
        <span className="inline-block px-4 py-1 text-blue-600 font-semibold bg-blue-50 rounded-full shadow-sm">
          🚀 My Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Pinned Projects</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Here are some of my featured projects, showcasing my skills in
          full-stack development and problem-solving.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
          <div className="relative">
            <img
              src={portfolio}
              alt="Project 1"
              className="w-full h-60 object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
              Deployed
            </span>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              A personal portfolio to showcase my projects, skills, and
              experiences with a modern responsive design.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                Github
              </span>
              <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full">
                Cloudflare
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://jayr-portfolio.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
          <div className="relative">
            <img
              src="https://picsum.photos/601/400"
              alt="Project 2"
              className="w-full h-60 object-cover"
            />
            <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
              In Progress
            </span>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">Task Manager App</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              A productivity tool that helps users organize tasks, set
              deadlines, and track progress efficiently.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                Express
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                MongoDB
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
          <div className="relative">
            <img
              src="https://picsum.photos/602/400"
              alt="Project 3"
              className="w-full h-60 object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
              Deployed
            </span>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">E-Commerce Store</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              A full-stack online store with product listings, a shopping cart,
              and secure payment integration.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full">
                Next.js
              </span>
              <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full">
                Stripe
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                PostgreSQL
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
