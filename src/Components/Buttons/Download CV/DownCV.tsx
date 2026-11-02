import downloadCV from "../../../assets/downloadCV.svg";
import LugisaniCV from "../../../assets/Lugisani_Mahlatsi CV.pdf"

export default function DownCV(){
  return(
    <>
      <button className="hero-buttons">
        <img className="h-5 opacity-60" src={downloadCV} alt="" />
        <a target="_blank" download={true} href={LugisaniCV}>cv →</a>
      </button>
    </>
  )
}