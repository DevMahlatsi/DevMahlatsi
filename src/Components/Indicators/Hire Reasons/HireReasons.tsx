import { hireReasons } from "../../../Data/devmahlatsi.data";

export default function HireReasons(){
  return(
    <>
      <div className="grid grid-cols-1 gap-2 border rounded-3xl p-2">
        {hireReasons.map((reason) => {
          return(
          <div>
            <div className="flex gap-2 px-2 py-3 items-center border rounded-3xl">
                <img 
                  className="max-h-14 min-h-9 p-2 rounded-full bg-[#1a73e8]"
                  src={reason.icon} 
                  alt={reason.title}/>

                <div>
                  <h1>
                  <strong>
                    {reason.title}
                  </strong>
                </h1>
                <p>
                  {reason.description}
                </p>
                </div>
              </div>
          </div>
              
          )
        })}
      </div>
    </>
  )
}