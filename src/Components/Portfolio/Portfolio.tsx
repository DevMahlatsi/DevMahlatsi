import { useState } from "react";
import { projects as rawProjects } from "../../Data/devmahlatsi.data";
import type { Project } from "../../Props/devmahlatsi.props";
import SelectedProjectsBanner from "../Indicators/Page Banners/Selection Projects in Mind/SelectedProjectsBanner";
import RecentWork from "../Indicators/Page Headings/Recent Work/RecentWork";
import ProjectCard from "./ProjectCard";

const projects = rawProjects as Project[];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "planned">("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "web" | "mobile" | "iot" | "ai">("all");

  const filteredProjects = projects.filter(project => {
    // Status filter
    if (filter !== "all" && project.status !== filter) return false;
    // Category filter
    if (categoryFilter !== "all" && project.category !== categoryFilter) return false;
    return true;
  });

  const statusCounts = {
    all: projects.length,
    completed: projects.filter(p => p.status === "completed").length,
    "in-progress": projects.filter(p => p.status === "in-progress").length,
    planned: projects.filter(p => p.status === "planned").length,
  };

  const categoryCounts = {
    all: projects.length,
    web: projects.filter(p => p.category === "web").length,
    mobile: projects.filter(p => p.category === "mobile").length,
    iot: projects.filter(p => p.category === "iot").length,
    ai: projects.filter(p => p.category === "ai").length,
  };

  return (
    <div className="min-h-screen bg-[black]">
      <br /><br />
      <RecentWork />
      <br /><br />
      <SelectedProjectsBanner />
      
      {/* Filter Section */}
      <div className="container mx-auto px-4 mt-8">
        {/* Status Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[3px] text-xs md:text-sm font-medium border transition-colors ${
              filter === "all"
                ? "border-[var(--accent-mono)] text-[var(--accent-mono)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
            }`}
          >
            all ({statusCounts.all})
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[3px] text-xs md:text-sm font-medium border transition-colors ${
              filter === "completed"
                ? "border-[var(--accent-mono)] text-[var(--accent-mono)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
            }`}
          >
            completed ({statusCounts.completed})
          </button>
          <button
            onClick={() => setFilter("in-progress")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[3px] text-xs md:text-sm font-medium border transition-colors ${
              filter === "in-progress"
                ? "border-[var(--accent-mono)] text-[var(--accent-mono)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
            }`}
          >
            in progress ({statusCounts["in-progress"]})
          </button>
          <button
            onClick={() => setFilter("planned")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[3px] text-xs md:text-sm font-medium border transition-colors ${
              filter === "planned"
                ? "border-[var(--accent-mono)] text-[var(--accent-mono)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
            }`}
          >
            planned ({statusCounts.planned})
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setCategoryFilter("all")}
            className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-[3px] text-[10px] md:text-xs font-medium border transition-colors ${
              categoryFilter === "all"
                ? "border-[var(--accent)] text-[var(--text-primary)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)]"
            }`}
          >
            all ({categoryCounts.all})
          </button>
          <button
            onClick={() => setCategoryFilter("web")}
            className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-[3px] text-[10px] md:text-xs font-medium border transition-colors ${
              categoryFilter === "web"
                ? "border-[var(--accent)] text-[var(--text-primary)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)]"
            }`}
          >
            web ({categoryCounts.web})
          </button>
          <button
            onClick={() => setCategoryFilter("mobile")}
            className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-[3px] text-[10px] md:text-xs font-medium border transition-colors ${
              categoryFilter === "mobile"
                ? "border-[var(--accent)] text-[var(--text-primary)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)]"
            }`}
          >
            mobile ({categoryCounts.mobile})
          </button>
          <button
            onClick={() => setCategoryFilter("iot")}
            className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-[3px] text-[10px] md:text-xs font-medium border transition-colors ${
              categoryFilter === "iot"
                ? "border-[var(--accent)] text-[var(--text-primary)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)]"
            }`}
          >
            iot ({categoryCounts.iot})
          </button>
          <button
            onClick={() => setCategoryFilter("ai")}
            className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-[3px] text-[10px] md:text-xs font-medium border transition-colors ${
              categoryFilter === "ai"
                ? "border-[var(--accent)] text-[var(--text-primary)]"
                : "border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--border-strong)]"
            }`}
          >
            ai ({categoryCounts.ai})
          </button>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects match the selected filters.</p>
            <button
              onClick={() => {
                setFilter("all");
                setCategoryFilter("all");
              }}
              className="mt-4 text-[var(--accent-mono)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}