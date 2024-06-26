import NavButton from "./NavButton";


export default function NavBar() {
  return (
    <div className="px-24 border-b text-gray-500 text-sm ">
     <div className="flex gap-16 ">
        <NavButton selected={true} text="Job preview" />
        <NavButton selected={false} text="Applicants" />
        <NavButton selected={false} text="Match" />
        <NavButton selected={false} text="Messages" />
     </div>
    </div>
  )
}
