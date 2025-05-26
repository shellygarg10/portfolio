import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";

const HomeSection = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          WEB
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-700 tracking-tight break-all">
          DEVELOPER
        </h2>
      </div>

      {/* About Section */}
      <div className="text-neutral-300 text-base sm:text-lg mb-16 space-y-10">
        {/* Intro Paragraph */}
        <p className="text-neutral-300 text-lg sm:text-xl">
          I am a full-stack web developer passionate about building meaningful
          and reliable technology. Skilled in MERN stack, Next.js, I create
          clean backends, thoughtful user interfaces, and scalable applications
          designed for impact.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-base sm:text-lg">
          <div className="p-4 bg-gradient-to-br from-[#242424] via-[#1E1E1E] to-[#141414] border-2 border-neutral-800/30 rounded-xl hover:border-orange-400/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">
              🤖 AI & Backend Systems
            </h3>
            <p>
              I build intelligent systems by integrating AI tools into websites
              and backend workflows. My focus is on enhancing automation and
              streamlining complex operations.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-[#242424] via-[#1E1E1E] to-[#141414] border border-neutral-800/30 rounded-xl hover:border-orange-400/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">
              🌍 Open Source & UI Dev
            </h3>
            <p>
              From collaborative open-source work to creating user-friendly
              designs, I enjoy blending development with community-driven and
              aesthetic thinking.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <Project />
      </div>

      {/* Resume Section */}
      <div className="mb-16">
        <Resume />
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomeSection;
