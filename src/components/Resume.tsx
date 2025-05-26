const Resume = () => {
  return (
    <div>
      <div>
        {/* WORK EXPERIENCE */}
        <div className="mb-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            WORK
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-700 tracking-tight break-all">
            EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#242424]/20 via-[#1E1E1E]/10 to-[#242424]/20 border border-neutral-900/10 rounded-xl p-6 hover:border-orange-400/10 transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-orange-400 font-medium group-hover:text-white transition-colors">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block w-fit text-neutral-400 text-sm bg-neutral-800/70 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>

                <ul className="text-neutral-300 space-y-2 mb-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-400 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/50">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-800/70 text-neutral-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*tech skills */}
      <div className="my-16">
        <div className="mb-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            TECH
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-700 tracking-tight break-all">
            SKILLS
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gradient-to-br from-[#141414]/20 via-[#1E1E1E]/40 to-[#141414]/20 border border-neutral-900/10 rounded-xl p-5 hover:border-orange-400/10 transition-all duration-300"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-12 h-12 rounded-md bg-white p-1"
              />
              <div>
                <h4 className="text-white font-semibold text-lg break-all">
                  {tool.name}
                </h4>
                <p className="text-neutral-400 text-sm">{tool.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* EDUCATION */}
<div className="my-16">
  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 font-bold tracking-tight break-all">
    EDUCATION
  </h2>

  <div className="mt-12 grid grid-cols-1 gap-6">
    {education.map((edu, i) => (
      <div
        key={i}
        className="group bg-gradient-to-br from-[#242424]/20 via-[#1E1E1E]/10 to-[#242424]/20 border border-neutral-900/10 rounded-xl p-6 hover:border-orange-400/10 transition-all duration-300"
      >
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                {edu.institution}
              </h3>
              <p className="text-orange-400 font-medium group-hover:text-white transition-colors">
                {edu.degree}
              </p>
            </div>
            <span className="inline-block w-fit text-neutral-400 text-sm bg-neutral-800/70 px-3 py-1 rounded-full">
              {edu.duration}
            </span>
          </div>

          <p className="text-neutral-400 text-sm mb-4">{edu.location}</p>
          {edu.grade && (
            <p className="text-sm text-neutral-300 mb-4">{edu.grade}</p>
          )}

          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/50">
            {edu.courses.map((course, index) => (
              <span
                key={index}
                className="text-xs bg-neutral-800/70 text-neutral-300 px-3 py-1 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Resume;
// Sample data structures
const experiences = [
  {
    company: "INMAS, DRDO",
    role: "Software Developer & Research Intern",
    duration: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Developed a standalone application to manage CBRN emergency training data with advanced data visualization and multi-filter support for better decision-making.",
      "Assisted in structuring and optimizing the database schema, enhancing data retrieval efficiency by 30%.",
      "Implemented 5+ key features including automated report generation and an interactive training information page.",
    ],
    techStack: [ "MySQL", "Data Visualization", "Python", "PyQt"],
  },
  {
    company: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    duration: "May 2024 - Jul 2024",
    responsibilities: [
      "Contributed to open-source projects by fixing bugs and adding new features.",
      "Collaborated with maintainers and community members to improve project documentation and usability.",
      "Implemented UI improvements and enhanced codebase stability."
    ],
    techStack: ["React", "JavaScript", "Git", "Open Source Tools"],
  },
];

const education = [
  {
    institution: "Guru Gobind Singh Indrapastha University",
    degree: "BTech in Information Technology",
    duration: "Nov 2022 - Jun 2026",
    location: "New Delhi",
    grade: "CGPA: 8.91",
    courses: ["Data Structures & Algorithms", "DBMS", "Web Technologies" , "Computer Networks"]
  },
  {
    institution: "DLDAV Model School",
    degree: "High School",
    duration: "Apr 2008 - Mar 2022",
    location: "New Delhi",
    courses: ["Computer Science", "Mathematics", "Physics"]
  }
];

const skills = [
  {
    name: "C++",
    label: "Programming Language",
    src: "src/assets/icons/cplus.svg",
  },
  {
    name: "JavaScript",
    label: "Programming Language",
    src: "src/assets/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    label: "Typed JavaScript",
    src: "src/assets/icons/typescript.svg",
  },
  {
    name: "React.js",
    label: "Frontend Library",
    src: "src/assets/icons/reactjs.svg",
  },
  {
    name: "Next.js",
    label: "React Framework",
    src: "src/assets/icons/nextjs.svg",
  },
  {
    name: "Framer",
    label: "Prototyping Tool",
    src: "src/assets/icons/framer.svg",
  },
  {
    name: "Tailwind CSS",
    label: "CSS Framework",
    src: "src/assets/icons/tailwindcss.svg",
  },
  {
    name: "Node.js",
    label: "Backend Runtime",
    src: "src/assets/icons/nodejs.svg",
  },
  {
    name: "Express.js",
    label: "Backend Framework",
    src: "src/assets/icons/express.svg",
  },
  {
    name: "MongoDB",
    label: "NoSQL Database",
    src: "src/assets/icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    label: "Relational Database",
    src: "src/assets/icons/postgresql.svg",
  },
  {
    name: "GitHub",
    label: "Version Control",
    src: "src/assets/icons/github.svg",
  },
  {
    name: "Figma",
    label: "UI/UX Design Tool",
    src: "src/assets/icons/figma.svg",
  },
];
