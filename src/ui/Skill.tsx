

export default function Skill({title,children}:{title:string,children:React.ReactNode}) {
  return (
    <div className="border flex p-1 gap-1 rounded-md">
          {children}
          <p className="font-medium text-sm text-slate-800">{title}</p> 
        </div>
  )
}
