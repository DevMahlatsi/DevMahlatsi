import { useState, useEffect } from "react";
import type { Project } from "../../Props/devmahlatsi.props";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-raised)] border border-[var(--border)] rounded-[3px] z-50">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 text-gray-400 hover:text-white text-2xl z-10 bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all"
        >
          ✕
        </button>
        
        {/* Image Gallery */}
        <div className="relative h-64 md:h-96 bg-[#121212]">
          <img 
            src={project.images[currentImageIndex]} 
            alt={project.title}
            className="w-full h-full object-contain"
          />
          
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all"
              >
                ◀
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all"
              >
                ▶
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Title & Links */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-white">{project.title}</h2>
            <div className="flex gap-3">
              {project.links?.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent-mono)] hover:text-[var(--text-primary)] transition-colors text-sm md:text-base"
                >
                  GitHub →
                </a>
              )}
              {project.links?.liveDemo && (
                <a 
                  href={project.links.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-[var(--border-strong)] px-3 py-1.5 md:px-4 md:py-2 rounded-[3px] hover:border-[var(--accent-mono)] hover:text-[var(--accent-mono)] transition-colors text-sm md:text-base"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
          
          {/* Meta */}
          <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-[var(--text-muted)] mb-6 pb-4 border-b border-[var(--border)]">
            <span className="capitalize">{project.category}</span>
            <span>{project.year}</span>
            {project.duration && <span>{project.duration}</span>}
            <span className={`px-2 py-0.5 rounded-[3px] border text-xs ${
              project.status === 'completed'
                ? 'border-[var(--accent-mono)] text-[var(--accent-mono)]'
                : 'border-[var(--border-strong)] text-[var(--text-muted)]'
            }`}>
              {project.status === 'in-progress' ? 'IN PROGRESS' : project.status.toUpperCase()}
            </span>
          </div>
          
          {/* Problem */}
          {project.problem && (
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-2">The Problem</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.problem}</p>
            </div>
          )}
          
          {/* Solution */}
          {project.solution && (
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-2">The Solution</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          )}
          
          {/* My Role */}
          {project.team.role && (
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-2">My Role</h3>
              <p className="text-sm md:text-base text-gray-300 mb-2">{project.team.role}</p>
              {project.team.responsibilities && project.team.responsibilities.length > 0 && (
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
                  {project.team.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          {/* Full Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 md:px-3 md:py-1 bg-gray-800 rounded-full text-xs md:text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1">
                {project.features.slice(0, 8).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
                {project.features.length > 8 && (
                  <li className="text-gray-500">+{project.features.length - 8} more features</li>
                )}
              </ul>
            </div>
          )}
          
          {/* Metrics / Results */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div className="mb-6 p-4 bg-[var(--bg)] rounded-[3px] border border-[var(--border)]">
              <h3 className="text-base md:text-lg font-bold text-[var(--accent-mono)] mb-3">Key Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-400 text-xs md:text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="text-white text-sm md:text-base font-medium ml-2">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}