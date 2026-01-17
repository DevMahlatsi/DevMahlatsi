import downloadCV from "../../../assets/downloadCV.svg";

export default function DownCV(){
  return(
    <>
      <button className="hero-buttons bg-[rgba(63,63,63,0.62)] border-2 border-[#1a73e8]">
        <img className="h-7" src={downloadCV} alt="download icon" />
        Download CV
      </button>
    </>
  )
}