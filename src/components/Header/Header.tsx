import { useState } from 'react'
import { useLocation } from "react-router-dom"

import ScheduleCard from './ScheduleCard'
import Calendar from '../icons/Calendar'
import Close from '../icons/Close'
import Bell from '../icons/Bell'
import rick from './rick.png'

type Schedule = {
  id: number;
  title: string;
  details: string;
  status: 'pending' | 'done' | 'inProgress';
}

export const schedule: Schedule[] = [
  {
    id: 1,
    title: 'Solve Linked List Question',
    details: 'Some stuff about linked lists. All reputed companies ask at least one qeustion about linked list',
    status: 'done',
  },
  {
    id: 2,
    title: 'Solve Linked List Question',
    details: 'Some stuff about linked lists. All reputed companies ask at least one qeustion about linked list',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Solve Linked List Question',
    details: 'Some stuff about linked lists. All reputed companies ask at least one qeustion about linked list',
    status: 'inProgress',
  }
]

export default function Header() {
  const { pathname } = useLocation()
  const [showNotifications, toggleNotifications] = useState(false)
  const pathTitleMap: Record<string, string> = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/tasks': 'Tasks',
    '/jobs': 'Jobs',
    '/edit-resume': 'Edit Resume',
  }

  const handleButtonClick = () => toggleNotifications(!showNotifications)

  return (
    <div className="w-full fixed flex px-7 py-3 bg-mirage-800/50 text-2xl font-normal items-center top-0 left-0">
      <span>
        {pathTitleMap[pathname]}
      </span>
      <ul className="ml-auto flex gap-3">
        <li className="w-[45px] h-[45px] bg-mirage-500 flex items-center justify-center rounded rounded-md cursor-pointer" onClick={handleButtonClick}>
          <Calendar className="fill-white h-6 w-6" />
        </li>
        <li className="w-[45px] h-[45px] bg-mirage-500 flex items-center justify-center rounded rounded-md cursor-pointer" onClick={handleButtonClick}>
          <Bell className="fill-white h-6 w-6" />
        </li>
        <li className="w-[45px] h-[45px] bg-mirage-500 flex items-center justify-center rounded rounded-md cursor-pointer overflow-hidden">
          <img src={rick} className="w-[45px] h-[45px]" />
        </li>
      </ul>
      <div className={`z-10 w-[450px] h-[100vh] border-l border-l-mirage-700/50 p-5 bg-mirage-900 absolute top-0 right-0 transition-all ${showNotifications ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
        <h2 className="font-[200] mb-7">Today's Tasks</h2>
        <span className="top-5 right-7 absolute" onClick={handleButtonClick}>
        <Close className="fill-white/70 h-7 w-7" />
        </span>
        <div className="flex-col flex w-full gap-2">
          {schedule.map((data) => <ScheduleCard key={data.id} {...data} />)}
        </div>
      </div>
    </div>
  )
}
