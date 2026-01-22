import type { skillsProps } from "../../Props/devmahlatsi.props";

export default function({id, title, icon, description}: skillsProps){
  return(
    <div className="">
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}