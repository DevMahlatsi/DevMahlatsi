import downloadCV from "../../../assets/downloadCV.svg";
import LugisaniCV from "../../../assets/Lugisani Jeremiah Mahlatsi CV.pdf"

export default function DownCV(){
  return(
    <>
      <button className="hero-buttons hover:bg-[rgba(19,19,19,0.62)] bg-[rgba(63,63,63,0.62)] border-2 border-[#1a73e8]">
        <img className="h-7" src={downloadCV} alt="download icon" />
        <a target="_blank" download={true} href={LugisaniCV}>Download CV</a>
      </button>
    </>
  )
}