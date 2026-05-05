import { useState } from "react";
import blueWork from '../../../assets/blueWork.svg';
import grayWork from '../../../assets/grayWork.svg';

export default function Available(){
  const [status, _setStatus] = useState({
    available: true,
    message: "Currently not available for freelance.",
    loading: true,
  });
  
  if(!status.available){
    return(
      <>
        <div className="leading-tight text-sm inline-flex items-center rounded-4xl bg-gray- border-2 p-1 px-2 gap-2 my-4" >
          <img className="h-6" src={grayWork} alt="work icon" />
          <h1>
            {status.message}
          </h1>
        </div>
      </>
    )
  }
  return(
    <> 
      <div className="text-sm inline-flex items-center rounded-4xl border-[#1a73e8] border-2 p-2 px-5 gap-2 my-6 bg-[#1a73e8]/10">
          <img className="h-6" src={blueWork} alt="work icon" />
          <h1 className="font-medium">
            Available for Software Development Opportunities
          </h1>
        </div>
    </>
  )
}