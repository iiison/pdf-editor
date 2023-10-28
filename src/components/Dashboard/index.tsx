import { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import { LinkedInProfileScraper } from 'linkedin-profile-scraper';

import ScheduleCard from '../Header/ScheduleCard'
import { schedule } from '../Header/Header'
import InfoWithBars from './InfoWithBars'
import UserDetails from '../UserDetails/UserDetails'
import Area from './Area'

import 'react-day-picker/dist/style.css'

const xAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const yAxis = [1, 2, 3, 2, 5]
const applications = [1, 2, 1, 2, 1]

export default function Dashboard() {
  const [date, setDate] = useState<Date>()
  // useEffect(() => {
  //   const doIt = async () => {
  //     const scraper = new LinkedInProfileScraper({
  //       sessionCookieValue: 'AQEDAQ2hBcoDxCqCAAABibrnC7MAAAGJ3vOPs1YAL6JKD7cm11lApGy8E7rHeVqcaSBWtcF3KBUekdCtzu9Zp0BW4AtGvmFG2fJKACg_d6e9cLKFIT7XFWuZSs8V1VhV_QWxolhWr0vtNhzNvl1DMWmh',
  //       keepAlive: false
  //     });

  //     // Prepare the scraper
  //     // Loading it in memory
  //     await scraper.setup()

  //     const result = await scraper.run('https://www.linkedin.com/in/someone/')

  //     console.log(result)
  //   }

  //   doIt()
  // }, [])

  return <UserDetails />

  // return (
  //   <div className="w-full flex gap-3 items-start">
  //     <div className="w-1/3 text-mirage-200 flex-col pt-3">
  //       <div className="w-full flex justify-center">
  //         <DayPicker
  //           mode="single"
  //           selected={date}
  //           onSelect={setDate}
  //         />
  //       </div>
  //       <div className="w-full flex flex-col gap-2">
  //         {schedule.map((data) => <ScheduleCard key={data.id} {...data} />)}
  //       </div>
  //     </div>
  //     <div className="w-2/3 flex-wrap flex-col gap-5">
  //       <div className="w-full flex gap-5">
  //         <div className="w-1/2 h-[260px] bg-affair-600 rounded rounded-xl border border-affair-400">
  //           <h2 className="text-lg font-normal text-center mt-2">Your Weekly Progress</h2>
  //           <InfoWithBars xAxis={xAxis} yAxis={yAxis} barColor='#FFFFFF'  />
  //         </div>
  //         <div className="w-1/2 h-[260px] bg-[#f8b940] rounded rounded-xl border border-white">
  //           <h2 className="text-lg font-normal text-center mt-2 text-[#424042]">Your Weekly Job Applications</h2>
  //           <InfoWithBars xAxis={xAxis} yAxis={applications} barColor='#424042' />
  //         </div>
  //       </div>
  //       <div className="w-full flex gap-5 mt-5">
  //         <div className="w-1/2 gap-5 bg-mirage-900 rounded rounded-xl border border-mirage-300/30 flex-col p-4 px-3">
  //           <h2 className="text-lg font-normal text-center w-full">
  //             15 Unsolved Questions
  //           </h2>
  //           <div className="flex-col mt-10 mb-10 w-full">
  //             <p className="w-full text-right ml-auto mt-3 mb-1 text-sm text-mirage-300/70">20 / 35</p>
  //             <div className="overflow-hidden rounded-full bg-white w-full relative h-[5px]">
  //               <div className="bg-affair-700 w-[77%] h-full absolute left-0 top-0" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="w-1/2 bg-mirage-900 rounded rounded-xl border border-mirage-300/30 flex-col p-4 px-3">
  //           <h2 className="text-lg font-normal text-center">Applied For 20 Jobs Last Week</h2>
  //           <div className="flex-col">
  //             <Area />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}
