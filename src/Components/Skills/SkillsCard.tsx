
import type { skillsProps } from "../../Props/devmahlatsi.props";

export default function({id, title, icon, description}: skillsProps){
  return(
    <div key={id} className="border w-65 flex flex-col border-[var(--border)] rounded-[3px] p-4 bg-[var(--bg-raised)]">
      <div><img className="h-10 p-1 opacity-50" src={icon} alt="" />
      <br />
      </div>

      <div><h1 className="">
        <strong>
          {title}
        </strong>

        </h1>

      </div>
      <div className="text-sm text-[var(--text-body)]">{description.map((item, index) => {
        return(
          <>
            <li className="marker:text-[var(--accent-mono)]" key={index}>
              {item}
            </li>
          </>
        )
      })}</div>
    </div>
  )
}