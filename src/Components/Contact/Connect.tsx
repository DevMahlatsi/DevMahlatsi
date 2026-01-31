import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function LetsConnect(){
  return(
    <>
      <div>
        <div>
          <h1>
            <strong>Let's Connect</strong>
          </h1>
        </div>
        <div>
          <div className="bg-red-600 h-11">
            <MdAlternateEmail className="lc-icon"/>
          </div>
          <div>
            <div>
              <h1>
                Email
              </h1>
            </div>
            <div>
              <h3>
                DevMahlatsi@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <CiLocationOn className="lc-icon"/>
          </div>
          <div>
            <div>
              <h1>Location</h1>
            </div>
            <div>
              <h3>Gauteng</h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <CiLinkedin className="lc-icon"/>
          </div>
          <div>
            <div>
              <h1>Linkedin</h1>
            </div>
            <div>
              <h3>Lugisani J Mahlatsi</h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <FaGithub className="lc-icon"/>
          </div>
          <div>
            <div>
              <h1>GitHub</h1>
            </div>
            <div>
              <h3>DevMahlatsi</h3>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}