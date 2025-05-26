import { Globe, GithubIcon } from "lucide-react";
import quiz_forge from '../assets/quiz_forge.png';
import finova from '../assets/finova.png';
import thriftAlley from '../assets/thriftAlley.png';
import dashboard from '../assets/dashboard.png';
import upshift from '../assets/upshift.png';

const projects = [
  {
    title: "Quiz Forge",
    description:
      "An intelligent study tool that transforms PDF documents into interactive quizzes and flashcards for efficient learning.",
    image: quiz_forge,
    techStack: ["Next.js", "Gemini AI API", "ShadCN UI", "TypeScript"],
    demoLink: "https://quiz-forge-six.vercel.app/",
    githubLink: "https://github.com/shellygarg10/QuizForge",
  },
  {
    title: "Finova",
    description:
      "A smart finance tracker that lets users upload receipts, manage expenses, and gain spending insights on mail.",
    image: finova,
    techStack: ["Next.js", "Clerk", "PostgreSQL", "Arcjet", "Gemini AI API"],
    demoLink: "https://aifinova.vercel.app/",
    githubLink: "https://github.com/shellygarg10/finova",
  },
  {
    title: "ThriftAlley",
    description:
      "A full-stack e-commerce platform featuring product listings, secure payments, and real-time order tracking.",
    image: thriftAlley,
    techStack: [ "MongoDB", "Express.js", "React.js", "Node.js", "Razorpay API"],
    demoLink: "https://thrift-alley-web.vercel.app/",
    githubLink: "https://github.com/shellygarg10/thriftAlley",
  },
  {
    title: "UpShift",
    description:
      "A modern landing page designed to showcase business software with smooth animations and responsive design.",
    image: upshift,
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoLink: "https://up-shift.vercel.app/",
    githubLink: "https://github.com/shellygarg10/UpShift",
  },
  {
    title: "Dashboard",
    description:
      "A responsive, frontend-only admin dashboard featuring interactive charts and a clean, minimalist UI.",
    image: dashboard,
    techStack: ["React.js",  "Chart.js", "CMDK", "Tailwind CSS",],
    demoLink: "https://dashboard-gold.vercel.app/",
    githubLink: "https://github.com/shellygarg10/dashboard",
  },
];


const Project = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          RECENT
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-700 tracking-tight break-all">
          PROJECTS
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#141414] via-[#1E1E1E]/50 to-[#141414] border-2 border-neutral-800/30 rounded-xl p-5 hover:border-orange-400/30 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="md:w-1/3 overflow-hidden rounded-lg border-2 border-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="md:w-2/3 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-800/70 text-neutral-300 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2 border-t border-neutral-800/50">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-sm text-neutral-300 font-medium hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-sm text-neutral-300 font-medium hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
