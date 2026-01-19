import { hireReasons } from "../../../Data/devmahlatsi.data";

export default function HireReasons(){
  return(
    <>
      <div className="flex flex-col gap-2">
        {hireReasons.map((reason) => {
          return(
          <div>
            <div className="flex gap-2 items-center border">
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