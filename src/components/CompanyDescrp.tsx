import IconCompany from "../ui/IconCompany";


export default function CompanyDescrp() {
  return (
    <div className="px-24 py-5">
       <div className="flex gap-5 mb-10">
                <IconCompany square={true} style="rounded-md" />
                <p className="text-xl self-center text-gray-600 font-medium">Atlassian</p>
       </div>
       <div className="flex justify-between w-[70%]">
        <div className="flex flex-col gap-3">
              <div>
                    <p className="text-sm text-gray-600">Company size</p>
                    <p className="text-gray-800">1k - 2k Employees</p>
              </div>
              <div>
                  <p className="text-sm text-gray-600">Sector</p>
                  <p className="text-gray-800">Information Technology, Infrastructure</p>
              </div>
              <div>
                  <p className="text-sm text-gray-600">Founded In</p>
                  <p className="text-gray-800">2019</p>
              </div>
        </div>

        <div className="flex flex-col gap-3">
              <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="text-gray-800">Private</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Funding</p>
                    <p className="text-gray-800">Bootstrapped</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Founded By</p>
                    <p className="text-gray-800">Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
        </div>
       </div>
    </div>
  )
}
