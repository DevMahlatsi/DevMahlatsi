import { hireReasons } from "../../../Data/devmahlatsi.data";

export default function HireReasons(){
  return(
    <>
    <div className="flex justify-center">
      <div className=" inline-grid  justify-center items-center gap-2 border border-[var(--border)] rounded-[3px] p-5 bg-[var(--bg-raised)]">
        {hireReasons.map((reason) => {
          return(
          <div>
            <div className="flex gap-2 px-2 py-3 items-center rounded-[3px] bg-[var(--bg)]">
                <img
                  className="max-h-14 min-h-9 p-2 opacity-50"
                  src={reason.icon}
                  alt={reason.title}/>

                <div>
                  <h1>
                  <strong>
                    {reason.title}
                  </strong>
                </h1>
                <p className="text-sm text-[var(--text-muted)]">
                  {reason.description}
                </p>
                </div>
              </div>
          </div>

          )
        })}
      </div>
    </div>
      
    </>
  )
}