import IconAdobe from "../ui/IconAdobe";
import IconAdoveXd from "../ui/IconAdoveXd";
import IconFigma from "../ui/IconFigma";
import Skill from "../ui/Skill";

export default function RequirementComponent() {
  return (
    <div className="px-24 flex justify-between border-b py-10">
       <div className="flex flex-col p-2 gap-2">
          <p className="text-slate-600  mb-4 text-sm">Skills Required</p>
         <Skill title="Figma">
           <IconFigma />
         </Skill>
         <Skill title="Adobe Illustrator">
           <IconAdobe />
         </Skill>
         <Skill title="Adobe XD">
           <IconAdoveXd />
         </Skill>

       </div>
       <div className="p-2">
           <p className="text-slate-600 mb-4 text-sm">Preferred language</p>
           <div>
             <p className="text-slate-800 text-md font-medium">English</p>
           </div>
       </div>
       <div className="p-2">
           <p className="text-slate-600 mb-4 text-sm">Type</p>
           <div>
             <p className="text-slate-800 text-md font-medium">Full time</p>
           </div>
       </div>
       <div className="p-2">
           <p className="text-slate-600 mb-4 text-sm">Years of Experience</p>
           <div>
             <p className="text-slate-800 text-md font-medium">3+ Years of Experience</p>
           </div>
       </div>
      
    </div>
  )
}
