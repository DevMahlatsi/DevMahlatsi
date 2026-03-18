import DownCV from "../Buttons/Download CV/DownCV";
import ViewWork from "../Buttons/View My Work/ViewMyWork";
import HeroStats from "../Indicators/Hero stats/HeroStats";

export default function Hero(){
  // const name = "Lugisani Jeremiah Mahlatsi";
  return(

    <>
    <br /><br />
    <div>
      <div className="grid sm:grid-cols-2 text-[#ffffff]">
      <div>
        <h1 className="text-5xl md:text-7xl">
        Hi, I'm <span className="name-deco">{name}</span>
        </h1>
        <br />
        <h3 className="text-2xl ">
        Full Stack Software Developer.
        </h3>
        <br />
        <p>
          I solve problems with code, learning new tech and continiously improve my skills.
          <br />
          Currently seeking a Work Intergrated Learning (WIL) or Software Development Internship.
        </p>
    </div>
    <div className="">
        
    </div>
    </div>
    <br />
    <div className="flex gap-5 text-sm">
      <ViewWork/>
      <DownCV/>
    </div>
    <br />
    <div>
      <HeroStats/>

    </div>
    
    </div>
    
     

    </>
  )
}