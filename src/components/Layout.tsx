import Header from "./Header";
import JobComponent from "./JobComponent";

import JObEdit from "./JobEdit";
import NavBar from "./NavBar";


export default function Layout() {
  return (
    <div className="">
        <div>

      <Header />
      <NavBar />
        </div>
        <div className="  md:grid grid-cols-12 ">

                <JobComponent />
                <JObEdit />
        </div>
    </div>
  )
}
