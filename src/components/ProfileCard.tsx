import shelly_pp from "../assets/shelly_pp.jpg";
import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import paperTexture from "../assets/paper.png";

function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-[#242424] via-[#1E1E1E] to-[#141414] rounded-3xl p-6 sm:p-8 w-full lg:w-[320px] lg:h-[600px] mx-auto flex flex-col items-center shadow-lg relative overflow-hidden border-2 border-orange-400/20">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl bg-repeat" style={{ backgroundImage: `url(${paperTexture})` }}></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <img
          src={shelly_pp}
          alt="Profile"
          className="w-44 h-44 rounded-2xl object-cover mt-4"
        />

        <h1 className="text-xl sm:text-2xl font-bold text-white text-center mt-4">
          Shelly Garg
        </h1>

        <div className="bg-[#222] text-sm text-orange-400 px-4 py-1 rounded-full mt-2">
          Full-Stack Developer
        </div>

        <div className="w-full border-t border-gray-600 my-5"></div>

        <div className="flex flex-col w-full gap-3 text-white text-sm">
          <div className="flex items-center bg-[#222] p-3 rounded-lg">
            <Mail className="w-5 h-5 text-orange-400 mr-3" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs">EMAIL</span>
              <span className="text-white break-all">
                shellygarg3522@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center bg-[#222] p-3 rounded-lg mb-4">
            <MapPin className="w-5 h-5 text-orange-400 mr-3" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs">LOCATION</span>
              <span className="text-white">Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/shelly-garg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-6 h-6 text-white hover:text-orange-400 transition" />
          </a>
          <a
            href="https://github.com/shellygarg10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-6 h-6 text-white hover:text-orange-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
