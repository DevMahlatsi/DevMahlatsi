import AboutProjectsShipped from "../Indicators/Projects Shipped/AboutProjectsShipped/AboutProjectsShipped";
import AboutYearsExperience from "../Indicators/Years Of Experience/About/AboutYearsExperience";
import HeroYearOfExperience from "../Indicators/Years Of Experience/Hero/HeroYearsExperience";

export default function About(){
  return(
    <>
      <div className="grid grid-cols-2">
        <div>this side is why I should be hired</div>
        <div>
          <div>
            <p>
              I am a <span className="about-intro">full stack software developer </span> passionate about building smooth, responsive <span className="about-intro">web and mobile</span> experiences. I love solving <span className="about-intro">real problems</span>  with code and learning new technologies as I go.
            </p>
            <br />
            <p>
              Whether it's front-end, back-end, or everything in between, I'm all about creating things that work and feel good. When I'm not coding, I'm probably exploring ideas, vibing to music, or planning what to build next. Let's connect and make something awesome.
            </p>
          </div>
          <br />
          <div className="grid grid-cols-2 gap-2">
            <AboutYearsExperience/>
            <AboutProjectsShipped/>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}