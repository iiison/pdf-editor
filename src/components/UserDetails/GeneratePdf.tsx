import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom'

import type { ComponentProps, UserDataT, ExperienceT } from './types'

export function GeneratePdf({ saveStep, visibility, userData }: ComponentProps) {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('pdf-resume', {
      state: { ...userData }
    })
  };

  return (
    <div className={`w-full h-full text-white items-center justify-center flex ${!visibility && 'hidden'}`}>
      <div>
        <button className="text-affair-700 bordered rounded-md bg-white px-3 py-2 hover:bg-affair-100" onClick={handleClick}>Generate My Resume</button>
      </div>
    </div>
  )
}
