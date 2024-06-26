

export default function IconText({text,children,textColor}:{text:string,children:React.ReactNode,textColor?:string}) {
  return (
    <div className="flex gap-2 ">
       {children}
       <p className={`text-md self-center ${textColor} `} >{text}</p>
    </div>
  )
}
