import { skills } from "../../Data/devmahlatsi.data";

export default function Skills(){
  return(
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {skills.map((skill) => {
          return(
            <>
              <div key={skill.id} className="border">
                <div>
                  <img src={skill.icon} alt="icon missing here" />
                </div>
                <div>
                  <h1>{skill.title}</h1>
                </div>
                <div>
                  <ul>
                    {skill.description.map((point, index) => {
                      return(
                        <>
                          <li key={index}>
                              {point}
                          </li>
                        </>
                      )
                    })}
                  </ul>
                </div>

              </div>
              <br />
            </>
          )
        })}
      </div>
    </>
  )
}