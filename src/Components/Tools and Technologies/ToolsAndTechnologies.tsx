import { techToolsData } from "../../Data/devmahlatsi.data";

export default function ToolsAndTechnologies(){
  return(
    <>
      
      <div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-mono)] font-bold">
            02 — WHAT I ACTUALLY USE
          </p>
          <br/>
        </div>
        <div>
          <p className="text-sm text-[var(--text-body)] flex flex-wrap gap-x-2">
            {techToolsData.map((tool, index) => (
              <span key={tool.id}>
                {tool.title}{index < techToolsData.length - 1 ? " ·" : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )
}