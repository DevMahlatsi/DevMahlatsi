import viewWork from "../../../assets/viewWork.svg";


export default function ViewWork(){
  return(
    <button className="hero-buttons items-center bg-[#1a73e8] transition-duration-1s hover:p-10" >
      <h1>View my work</h1>
      <img className="h-7" src={viewWork} alt="view work icon" />
    </button>
  )
}