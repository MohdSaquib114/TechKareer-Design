import { useState } from "react"

export default function NavButton({text,selected}:{text:string,selected:boolean}) {
    const[select,setSelect ] = useState(selected)
  return (
    <div onClick={()=> setSelect(!select)} className=" p-3 flex flex-col">
    <a className={`${select?"text-orange-600":""}`} href="#">{text}</a>
    <div className={`h-[1px] w-[30px] bg-orange-600 self-center relative  top-3 ${select?"block":"hidden"}`}></div>
</div>
  )
}
