import AboutStats from "../Indicators/About-Stats/AboutStats";
import HireReasons from "../Indicators/Hire Reasons/HireReasons";
import GetToKnowMe from "../Indicators/Page Headings/Get To know me/GetToKnowMe";
import ToolsAndTechnologies from "../Tools and Technologies/ToolsAndTechnologies";

export default function About(){
  return(
    <>
    <br /><br /><br />
    <GetToKnowMe/>
    <br /><br />
      <div className="flex flex-col-reverse sm:grid grid:cols-1 gap-4 sm:grid-cols-2">
        
          <div>
            <HireReasons/>
          </div>
        <div>
          <div>
            <p>
              I build the full stack because I don't trust handing off the parts I care about. Backend architecture, API design, database schema, the frontend that sits on top of it — one person, one coherent system, no telephone game between a designer, a backend dev, and whoever's supposed to connect them.
            </p>
            <br />
            <p>
              I've led a 9-person team and built solo projects end to end. Both went fine. The difference was how many standups it took.
            </p>
          </div>
          <br />
            <AboutStats/>
          <br />
          <div>
            <ToolsAndTechnologies/>
          </div>
        </div>
      </div>
    </>
  )
}