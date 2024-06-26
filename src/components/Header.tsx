import IconBag from "../ui/IconBag";
import IconBell from "../ui/IconBell";
import IconCompany from "../ui/IconCompany";
import IconDownArrow from "../ui/IconDownArrow";
import IconMessage from "../ui/IconMessage";
import IconText from "../ui/IconText";
import PaymentIcon from "../ui/PaymentIcon";


export default function Header() {
  return (
    <div className="    grid grid-cols-6 p-3 border-b ">
     <div className="text-orange-600 font-semibold bg-gray-300 h-10 px-6 col-end-1  flex rounded-sm " ><p className="self-center">Logo</p></div>
     <div className="flex justify-between gap-1 border p-2  rounded-full col-start-3  col-end-5 text-sm">
                <div className="bg-orange-600 py-2  px-2 flex text-white   rounded-full">
                   <IconText text="Jobs">
                      <IconBag />
                   </IconText>
                 </div>
                 <IconText text="Messages" textColor="text-gray-400">
                    <IconMessage />
                 </IconText>
                 <IconText text="Payments" textColor="text-gray-400">
                     <PaymentIcon />
                 </IconText>
      
     </div>
     <div className="flex justify-end col-end-7 gap-4 ">
        <IconBell />
        <div className="flex self-center gap-2">
           <IconCompany/>
          <IconDownArrow/>
        </div>
     </div>
    </div>
  )
}
