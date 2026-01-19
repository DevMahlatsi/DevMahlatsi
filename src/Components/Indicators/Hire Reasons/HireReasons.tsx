import { hireReasons } from "../../../Data/devmahlatsi.data";

export default function HireReasons(){
  return(
    <>
      <div>
        {hireReasons.map((reason) => {
          return(
            <div>
              <div></div>
              <div></div>
            </div>
          )
        })}
      </div>
    </>
  )
}