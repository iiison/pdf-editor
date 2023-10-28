import { Link, useLocation } from "react-router-dom"

import Home from '../icons/Home'
import Floppy from '../icons/Floppy'
import Suitecase from '../icons/Suitecase'
import Person from '../icons/Person'

export default function Sidebar() {
  const { pathname } = useLocation()
  const activeNavClasses = 'text-white fill-white border-l-2 border-l-white'

  return (
    <div className="h-full fixed w-[210px] bg-mirage-800 py-4 pl-0">
      <ul className="w-full flex-col text-lg gap-3 text-white/70">
        <li className={`w-full hover:text-white transition-all hover:border-l-white/70 border-l-2 border-l-transparent cursor-pointer ${(pathname === '/' || pathname === '/dashboard') && activeNavClasses}`}>
          <Link to="/dashboard" className="flex gap-2 w-full items-center py-2 pl-7">
            <Home className={`h-6 w-6 ${(pathname === '/' || pathname === '/dashboard') ? 'fill-white' : 'fill-white/70'}`} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`w-full hover:text-white transition-all hover:border-l-white/70 border-l-2 border-l-transparent cursor-pointer ${pathname === '/tasks' && activeNavClasses}`}>
          <Link to="/tasks" className="flex gap-2 w-full items-center py-2 pl-7">
            <Floppy className={`h-6 w-6 ${pathname === '/tasks' ? 'fill-white' : 'fill-white/70'}`}/>
            <span>Tasks</span>
          </Link>
        </li>
        <li className={`w-full hover:text-white transition-all hover:border-l-white/70 border-l-2 border-l-transparent cursor-pointer ${pathname === '/jobs' && activeNavClasses}`}>
          <Link to="/jobs" className="flex gap-2 w-full items-center py-2 pl-7">
            <Suitecase className={`h-6 w-6 ${pathname === '/jobs' ? 'fill-white' : 'fill-white/70'}`}/>
            <span>Jobs</span>
          </Link>
        </li>
        <li className={`w-full hover:text-white transition-all hover:border-l-white/70 border-l-2 border-l-transparent cursor-pointer ${pathname === '/edit-resume' && activeNavClasses}`}>
          <Link to="/edit-resume" className="flex gap-2 w-full items-center py-2 pl-7">
            <Person className={`h-6 w-6 ${pathname === '/edit-resume' ? 'fill-white' : 'fill-white/70'}`}/>
            <span>Edit Resume</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
