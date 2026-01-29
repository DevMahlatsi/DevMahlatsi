import { designProcess } from "../../Data/devmahlatsi.data";

export default function ProcessDesign(){
  return(
    <>
      <div className="flex gap-8 flex-wrap justify-center ">
        {designProcess.map((process) => {
          return(
            <>
            <div className="border border-[#1a73e8] rounded-2xl p-4 w-65">
              <div className="bg-[#1a73e8] inline-block rounded-2xl">
                <h1 className="text-xl p-2 px-4 ">
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