import React from "react";


export default function JobApplication({children,type,count,last}:{children:React.ReactNode,type:string,count:number,last?:boolean}) {
  
    return (
    <div className={`flex justify-between py-4 text-sm text-gray-700  px-2 ${last?"":"border-b"}`}>
    <div className="flex items-center gap-2">
    {children}
   
    <p>{type}</p>
    </div>
    <p>{count}</p>

  </div>
  )
}
