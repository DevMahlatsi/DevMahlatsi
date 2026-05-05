import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function LetsConnect() {
  const handleEmailClick = () => {
    window.location.href = "mailto:DevMahlatsi@gmail.com";
  };

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Gauteng,SouthAfrica", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/lugisani-mahlatsi", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/DevMahlatsi", "_blank");
  };

  return (
    <div className="grid grid-cols-1 gap-4 border border-[#1a73e8] p-4 md:p-6 rounded-2xl bg-[#0a0a0a]">
      <div className="mb-2">
        <h1 className="text-xl font-bold text-white">Let's Connect</h1>
        <p className="text-gray-500 text-sm mt-1">Reach out through any of these channels</p>
      </div>

      {/* Email */}
      <button
        onClick={handleEmailClick}
        className="group bg-[#272727] rounded-xl flex items-center justify-between gap-4 p-4 hover:bg-[#1a73e8]/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1a73e8]/50"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1a73e8] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
            <MdAlternateEmail className="text-white text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-white">Email</h2>
            <h3 className="text-sm md:text-base text-gray-400">DevMahlatsi@gmail.com</h3>
          </div>
        </div>
        <HiArrowRight className="text-gray-500 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* Location */}
      <button
        onClick={handleLocationClick}
        className="group bg-[#272727] rounded-xl flex items-center justify-between gap-4 p-4 hover:bg-[#1a73e8]/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1a73e8]/50"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1a73e8] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
            <CiLocationOn className="text-white text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-white">Location</h2>
            <h3 className="text-sm md:text-base text-gray-400">Gauteng, South Africa</h3>
          </div>
        </div>
        <HiArrowRight className="text-gray-500 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* LinkedIn */}
      <button
        onClick={handleLinkedInClick}
        className="group bg-[#272727] rounded-xl flex items-center justify-between gap-4 p-4 hover:bg-[#1a73e8]/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1a73e8]/50"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1a73e8] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
            <CiLinkedin className="text-white text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-white">LinkedIn</h2>
            <h3 className="text-sm md:text-base text-gray-400">Lugisani J Mahlatsi</h3>
          </div>
        </div>
        <HiArrowRight className="text-gray-500 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* GitHub */}
      <button
        onClick={handleGitHubClick}
        className="group bg-[#272727] rounded-xl flex items-center justify-between gap-4 p-4 hover:bg-[#1a73e8]/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1a73e8]/50"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1a73e8] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
            <FaGithub className="text-white text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-white">GitHub</h2>
            <h3 className="text-sm md:text-base text-gray-400">DevMahlatsi</h3>
          </div>
        </div>
        <HiArrowRight className="text-gray-500 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all duration-300" />
      </button>
    </div>
  );
}