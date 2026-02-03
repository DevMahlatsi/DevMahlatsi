import Logo from "../Navigation Bar/Logo/Logo";

export default function footer(){
  return(
    <>
      <div className=" bg-[#272727]">
        <div className="flex items-center">
           <Logo/>
           <h1 className="name-deco text-2xl">
              DevMahlatsi
            </h1>
        </div>
      </div>
    </>
  )
}