import type { Project } from "../../Props/devmahlatsi.props";

export default function ProjectCard({ project }: { project: Project }) {
  // Helper for Status colors using your brand blue or gray
  const isComplete = project.status === "completed";

  return (
    <div className="group flex flex-col bg-[#0a0a0a] border border-[#808080]/20 rounded-2xl overflow-hidden hover:border-[#1a73e8]/50 transition-all duration-500 shadow-2xl">
      
      {/* Thumbnail Area */}
      <div className="relative h-48 w-full overflow-hidden bg-[#121212]">
        <img 
          src={project.images?.[0] || "/api/placeholder/400/225"} 
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* TOP LEFT: Project Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border ${
          isComplete ? "bg-[#1a73e8] border-[#1a73e8] text-white" : "bg-black/60 border-[#808080]/50 text-[#808080]"
        }`}>
          {project.status}
        </div>

        {/* TOP RIGHT: Category */}
        <span className="absolute top-4 right-4 text-[#1a73e8] text-[10px] font-black uppercase tracking-tighter">
          // {project.category}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-black text-white leading-none tracking-tight group-hover:text-[#1a73e8] transition-colors">
              {project.title}
            </h3>
            {/* Team/Solo Indicator using #808080 */}
            <p className="text-[10px] font-bold text-[#808080] mt-1 uppercase tracking-widest">
              {project.team.type === "solo" ? "Personal Project" : `Team Project (${project.team.teamSize})`}
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#808080]">{project.year}</span>
        </div>

        <p className="text-sm text-[#808080] mb-6 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Role & Impact */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#1a73e8] font-bold uppercase">Role:</span>
            <span className="text-[11px] text-white font-medium">{project.team.role}</span>
          </div>
          
          {project.metrics?.performanceImprovement && (
            <div className="p-3 bg-[#1a73e8]/5 border-l-2 border-[#1a73e8] rounded-r-lg">
              <p className="text-[10px] font-black text-[#1a73e8] uppercase">
                Result: {project.metrics.performanceImprovement}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack?.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[9px] font-bold bg-[#121212] border border-[#808080]/20 px-2 py-1 rounded text-[#808080] hover:text-white transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Footer */}
        <div className="mt-auto pt-5 border-t border-[#808080]/10 flex justify-between items-center">
          <div className="flex gap-6">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" className="text-[11px] font-black text-[#1a73e8] hover:text-white transition-colors tracking-widest">GITHUB</a>
            )}
            {project.links?.liveDemo && (
              <a href={project.links.liveDemo} target="_blank" className="text-[11px] font-black text-[#1a73e8] hover:text-white transition-colors tracking-widest">LIVE</a>
            )}
          </div>
          
          <button className="text-[10px] font-black tracking-widest text-[#808080] hover:text-[#1a73e8] transition-colors">
            DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
}