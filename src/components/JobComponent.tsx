
import CompanyDescrp from "./CompanyDescrp";
import JobProfile from "./JobProfile";
import JobRole from "./JobRole";

import RequirementComponent from "./RequirementComponent";

export default function JobComponent() {
  return (
    <div className="  col-start-1 col-end-10 border-r">
     <JobProfile jobTitle="Senior Product Designer" location="Delaware, USA" status="Open" salary="$300k-$400k" posted={"Posted 2 days ago"} />
     <RequirementComponent />
    <JobRole />
     <CompanyDescrp />
    </div>
  )
}
