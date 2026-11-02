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
    <div className="grid grid-cols-1 gap-4 border border-[var(--border)] p-4 md:p-6 rounded-[3px] bg-[var(--bg-raised)]">
      <div className="mb-2">
        <h1 className="text-xl font-bold text-[var(--text-primary)]">let's connect</h1>
        <p className="text-[var(--text-muted)] text-sm mt-1">Reach out through any of these channels</p>
      </div>

      {/* Email */}
      <button
        onClick={handleEmailClick}
        className="group bg-[var(--bg)] rounded-[3px] flex items-center justify-between gap-4 p-4 hover:bg-[var(--bg)]/80 transition-colors duration-200 cursor-pointer border border-[var(--border)] hover:border-[var(--accent-mono)]"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[var(--bg-raised)] border border-[var(--border-strong)] p-3 rounded-[3px] transition-colors duration-200 group-hover:border-[var(--accent-mono)]">
            <MdAlternateEmail className="text-[var(--text-primary)] text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-[var(--text-primary)]">email</h2>
            <h3 className="text-sm md:text-base text-[var(--text-muted)]">DevMahlatsi@gmail.com</h3>
          </div>
        </div>
        <HiArrowRight className="text-[var(--text-dim)] group-hover:text-[var(--accent-mono)] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* Location */}
      <button
        onClick={handleLocationClick}
        className="group bg-[var(--bg)] rounded-[3px] flex items-center justify-between gap-4 p-4 hover:bg-[var(--bg)]/80 transition-colors duration-200 cursor-pointer border border-[var(--border)] hover:border-[var(--accent-mono)]"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[var(--bg-raised)] border border-[var(--border-strong)] p-3 rounded-[3px] transition-colors duration-200 group-hover:border-[var(--accent-mono)]">
            <CiLocationOn className="text-[var(--text-primary)] text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-[var(--text-primary)]">location</h2>
            <h3 className="text-sm md:text-base text-[var(--text-muted)]">Gauteng, South Africa</h3>
          </div>
        </div>
        <HiArrowRight className="text-[var(--text-dim)] group-hover:text-[var(--accent-mono)] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* LinkedIn */}
      <button
        onClick={handleLinkedInClick}
        className="group bg-[var(--bg)] rounded-[3px] flex items-center justify-between gap-4 p-4 hover:bg-[var(--bg)]/80 transition-colors duration-200 cursor-pointer border border-[var(--border)] hover:border-[var(--accent-mono)]"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[var(--bg-raised)] border border-[var(--border-strong)] p-3 rounded-[3px] transition-colors duration-200 group-hover:border-[var(--accent-mono)]">
            <CiLinkedin className="text-[var(--text-primary)] text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-[var(--text-primary)]">linkedin</h2>
            <h3 className="text-sm md:text-base text-[var(--text-muted)]">Lugisani J Mahlatsi</h3>
          </div>
        </div>
        <HiArrowRight className="text-[var(--text-dim)] group-hover:text-[var(--accent-mono)] group-hover:translate-x-1 transition-all duration-300" />
      </button>

      {/* GitHub */}
      <button
        onClick={handleGitHubClick}
        className="group bg-[var(--bg)] rounded-[3px] flex items-center justify-between gap-4 p-4 hover:bg-[var(--bg)]/80 transition-colors duration-200 cursor-pointer border border-[var(--border)] hover:border-[var(--accent-mono)]"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[var(--bg-raised)] border border-[var(--border-strong)] p-3 rounded-[3px] transition-colors duration-200 group-hover:border-[var(--accent-mono)]">
            <FaGithub className="text-[var(--text-primary)] text-2xl" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-medium text-[var(--text-primary)]">github</h2>
            <h3 className="text-sm md:text-base text-[var(--text-muted)]">DevMahlatsi</h3>
          </div>
        </div>
        <HiArrowRight className="text-[var(--text-dim)] group-hover:text-[var(--accent-mono)] group-hover:translate-x-1 transition-all duration-300" />
      </button>
    </div>
  );
}