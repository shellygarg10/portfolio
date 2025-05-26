import React from "react";
import { Home, Folder, Briefcase, Pencil } from "lucide-react";

const navItems = [
  { id: "home", Icon: Home, label: "Home" },
  { id: "projects", Icon: Folder, label: "Projects" },
  { id: "experience", Icon: Briefcase, label: "Resume" },
  { id: "contact", Icon: Pencil, label: "Contact" },
];

function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[300px] bg-[#1C1A19] backdrop-blur-sm 
                    rounded-xl p-2 mt-2 shadow-lg z-50"
    >
      <div className="flex justify-around">
        {navItems.map(({ id, Icon, label }) => (
          <NavIcon
            key={id}
            Icon={Icon}
            label={label}
            active={activeSection === id}
            onClick={() => setActiveSection(id)}
          />
        ))}
      </div>
    </nav>
  );
}

function NavIcon({
  Icon,
  label,
  active,
  onClick,
}: {
  Icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`p-2 rounded-lg transition-colors flex flex-col items-center cursor-pointer ${
          active ? "bg-white/20" : "hover:bg-white/10"
        }`}
      >
        <Icon className="w-5 h-5 text-white" />
      </button>
      {/* Tooltip below the icon */}
      <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-[#222] text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default Navigation;
