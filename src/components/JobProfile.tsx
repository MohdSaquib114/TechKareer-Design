
import IconCoin from '../ui/IconCoin'
import IconDot from '../ui/IconDot'
import IconMark from '../ui/IconMark'
import Status from '../ui/Status'

export default function JobProfile({jobTitle,status,location,salary,posted}:{jobTitle:string,status:string,location:string,salary:string,posted:string}) {
  return (
    <div className=' px-24  py-10 flex flex-col gap-8 border-b'>
        <div className='flex gap-3'>
            <h1 className='text-3xl font-bold text-slate-900'>{jobTitle}</h1>
            <IconDot />
            <p className='text-xs self-center text-gray-500' >{posted}</p>
            <Status status={status} />
        </div>
        <div className='flex gap-3'>
            <div className='flex gap-1'>
                <IconMark />
                <p>{location}</p>
            </div>
           <IconDot />
            <div className='flex gap-1'>
                <IconCoin />
                <p>{salary}</p>
            </div>
        </div>
    </div>
  )
}
