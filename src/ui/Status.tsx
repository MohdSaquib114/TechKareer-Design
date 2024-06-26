

export default function   Status({status}:{status:string}) {
    const style = status === "Open"? "bg-green-200 text-green-800 border-green-800":"bg-red-300 text-red-600 border-red-600 "
  return (
    <div className={`border ${style} rounded-full flex py-0 px-3 gap-1 h-6 self-center `}>
     <div className={`w-1 h-1 rounded-full ${status==="Open"?"bg-green-800":"bg-red-600"} self-center`} ></div>
     <p className="text-xs self-center">{status}</p> 
    </div>
  )
}
