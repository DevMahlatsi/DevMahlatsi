import { projects as rawProjects } from "../../Data/devmahlatsi.data";
import type { Project } from "../../Props/devmahlatsi.props";
import SelectedProjectsBanner from "../Indicators/Page Banners/Selection Projects in Mind/SelectedProjectsBanner";
import RecentWork from "../Indicators/Page Headings/Recent Work/RecentWork";
import ProjectCard from "./ProjectCard"; // Ensure this path matches your file structure

const projects = rawProjects as Project[];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[black] ">
      <br /><br />
      <RecentWork />
      <br /><br />
      <SelectedProjectsBanner />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}