import { useState } from "react";
import HomeSection from "./components/HomeSection";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "projects":
        return <Project />;
      case "experience":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#151312] text-white relative">
      {/* Background Texture */}
      <div className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/src/assets/paper.png')] bg-repeat z-0" />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main layout */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 px-6 pt-24">
          {/* Left column: ProfileCard */}
          <div className="hidden lg:block lg:w-[280px] sticky top-24 h-fit">
            <ProfileCard />
          </div>

          <div className="w-full lg:flex-1">
            {/* On small screens: ProfileCard on top */}
            {activeSection === "home" && (
              <div className="block lg:hidden mb-8">
                <ProfileCard />
              </div>
            )}

            <div className="space-y-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
              {renderContent()}
            </div>

            {/* On small screens: ProfileCard on bottom */}
            {activeSection !== "home" && (
              <div className="block lg:hidden mt-8 mb-12">
                <ProfileCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
