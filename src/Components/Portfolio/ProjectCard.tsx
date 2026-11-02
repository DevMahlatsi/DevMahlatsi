import { useState } from "react";
import type { Project } from "../../Props/devmahlatsi.props";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isComplete = project.status === "completed";

  return (
    <>
      <div className="group flex flex-col bg-[var(--bg-raised)] border border-[var(--border)] rounded-[3px] overflow-hidden hover:border-[var(--border-strong)] transition-colors duration-300 h-full">

        {/* Thumbnail Area */}
        <div className="relative h-48 w-full overflow-hidden bg-[#121212] cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <img
            src={project.images?.[0] || "/api/placeholder/400/225"}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* TOP LEFT: Project Status Badge */}
          <div className={`absolute top-3 left-3 px-2 py-0.5 rounded-[3px] text-[8px] md:text-[9px] font-black uppercase tracking-widest border ${
            isComplete ? "bg-[var(--bg)] border-[var(--accent-mono)] text-[var(--accent-mono)]" : "bg-black/60 border-[var(--border-strong)] text-[var(--text-muted)]"
          }`}>
            {project.status === 'in-progress' ? 'IN PROGRESS' : project.status}
          </div>

          {/* TOP RIGHT: Category */}
          <span className="absolute top-3 right-3 text-[var(--accent-mono)] text-[8px] md:text-[10px] font-black uppercase tracking-tighter">
            // {project.category}
          </span>

        </div>

        {/* Content Body */}
        <div className="p-4 md:p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg md:text-xl font-black text-[var(--text-primary)] leading-none tracking-tight group-hover:text-[var(--accent-mono)] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
                {project.title}
              </h3>
              {/* Team/Solo Indicator */}
              <p className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] mt-1 uppercase tracking-widest">
                {project.team.type === "solo" ? "Personal Project" : `Team Project (${project.team.teamSize})`}
              </p>
            </div>
            <span className="text-[9px] md:text-[10px] font-mono text-[var(--text-dim)]">{project.year}</span>
          </div>

          <p className="text-xs md:text-sm text-[var(--text-muted)] mb-3 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Role & Impact */}
          <div className="mb-3 space-y-2">
            {project.team.role && (
              <div className="flex items-center gap-2">
                <span className="text-[8px] md:text-[9px] text-[var(--accent-mono)] font-bold uppercase">Role:</span>
                <span className="text-[9px] md:text-[10px] text-[var(--text-primary)] font-medium truncate">{project.team.role}</span>
              </div>
            )}

            {project.metrics?.performanceImprovement && (
              <div className="p-2 bg-[var(--bg)] border-l-2 border-[var(--border-strong)]">
                <p className="text-[8px] md:text-[9px] font-black text-[var(--accent-mono)] uppercase">
                  Result: {project.metrics.performanceImprovement}
                </p>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack?.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[8px] md:text-[9px] font-bold bg-[#121212] border border-[var(--border)] px-1.5 py-0.5 md:px-2 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > 4 && (
              <span className="text-[8px] md:text-[9px] font-bold text-[var(--text-dim)]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Action Footer */}
          <div className="mt-auto pt-3 border-t border-[var(--border)] flex justify-between items-center">
            <div className="flex gap-4">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[9px] md:text-[10px] font-black text-[var(--accent-mono)] hover:text-[var(--text-primary)] transition-colors tracking-widest"
                >
                  GITHUB
                </a>
              )}
              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[9px] md:text-[10px] font-black text-[var(--accent-mono)] hover:text-[var(--text-primary)] transition-colors tracking-widest"
                >
                  LIVE
                </a>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[9px] md:text-[10px] font-black tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-mono)] transition-colors"
            >
              DETAILS →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}