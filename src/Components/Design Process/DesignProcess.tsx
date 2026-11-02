import { designProcess } from "../../Data/devmahlatsi.data";

export default function ProcessDesign(){
  return(
    <>
      <div className="flex gap-8 flex-wrap justify-center ">
        {designProcess.map((process) => {
          return(
            <>
            <div className="border border-[var(--border)] rounded-[3px] p-4 w-65 bg-[var(--bg-raised)]">
              <div className="inline-block">
                <h1 className="text-xl p-2 px-0 text-[var(--accent-mono)]">
                  0{process.id}
                </h1>
              </div>
              <div><h1>
                {process.title}
                </h1></div>
              <div>
                <p className="text-[var(--text-muted)]">
                  {process.description}
                </p>
              </div>
            </div>
              
            </>
          )
        })}
      </div>
    </>
  )
}