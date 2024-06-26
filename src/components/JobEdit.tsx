import IconApplicatns from "../ui/IconApplicatns";
import IconMatch from "../ui/IconMatch";

import IconMsg from "../ui/IconMsg";
import IconView from "../ui/IconView";
import JobApplication from "./JobApplication";


export default function JObEdit() {
  return (
    <div className="col-start-10 col-end-13 pt-5 px-3 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-2">
        <button className="flex justify-center text-orange-600 bg-orange-200 border border-orange-600 rounded-md gap-1 p-1" >
          <svg className="self-center" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.5H13M3 5H18M16.3333 5L15.7489 13.7661C15.6612 15.0813 15.6174 15.7389 15.3333 16.2375C15.0833 16.6765 14.706 17.0294 14.2514 17.2497C13.735 17.5 13.0759 17.5 11.7578 17.5H9.24221C7.92409 17.5 7.26503 17.5 6.74861 17.2497C6.29396 17.0294 5.91674 16.6765 5.66665 16.2375C5.38259 15.7389 5.33875 15.0813 5.25107 13.7661L4.66667 5M8.83333 8.75V12.9167M12.1667 8.75V12.9167" stroke="#DC4A2D" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Delete job
        </button>
        <button className="flex justify-center text-white bg-orange-600 border border-orange-600 rounded-md gap-1 p-1" >
         <svg className="self-center" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_9150)">
          <path d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_1_9150">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          Edit job
        </button>
    
      </div>
      <div  className="p-5 " >
        <JobApplication  type="Applicants" count={400} >
          <IconApplicatns />
        </JobApplication>

        <JobApplication type="Matches" count={100} >
          <IconMatch />
        </JobApplication>

        <JobApplication type="Messages" count={147} >
          <IconMsg />
        </JobApplication>

        <JobApplication type="Views" count={800} last={true} >
          <IconView />
        </JobApplication>

      </div>
    </div>
  )
}
