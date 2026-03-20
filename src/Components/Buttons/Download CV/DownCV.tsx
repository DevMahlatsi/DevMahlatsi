import downloadCV from "../../../assets/downloadCV.svg";

export default function DownCV(){
  return(
    <>
      <button className="hero-buttons hover:bg-[rgba(19,19,19,0.62)] bg-[rgba(63,63,63,0.62)] border-2 border-[#1a73e8]">
        <img className="h-7" src={downloadCV} alt="download icon" />
        <a download={true} href={downloadCV}>Download CV</a>
      </button>
    </>
  )
}