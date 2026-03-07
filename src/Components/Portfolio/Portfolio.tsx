import { projects as rawProjects } from "../../Data/devmahlatsi.data";
// import { projects } from "../../Data/devmahlatsi.data";
import type { Project } from "../../Props/devmahlatsi.props";
import SelectedProjectsBanner from "../Indicators/Page Banners/Selection Projects in Mind/SelectedProjectsBanner";
import RecentWork from "../Indicators/Page Headings/Recent Work/RecentWork";

const projects = rawProjects as Project[];
export default function Portfolio() {
  return(
    <>
      <br /><br />
            <RecentWork/>
            <br /><br />
            <SelectedProjectsBanner/>
            <div className="container mx-auto px-4 py-8">
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {projects.map((project: Project) => {
              return(
                <>  
                <div className="p-4 rounded-2xl border border-[#1a73e8]">
                  <h1>
                    {project.title}
                  </h1>
                </div>
                  
                </>
              )
            })}
        </div>
      </div>
    </>
  )
};
