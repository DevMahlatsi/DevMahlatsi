import { designProcess } from "../../Data/devmahlatsi.data";

export default function ProcessDesign(){
  return(
    <>
      <div className="flex gap-2">
        {designProcess.map((process) => {
          return(
            <>
            <div className="border ">
              <div className="bg-red-700 inline-block">
                <h1 className="p-3">
                  {process.id}
                </h1>
              </div>
              <div><h1>
                {process.title}
                </h1></div>
              <div>
                <p>
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