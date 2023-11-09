import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, AllUserDataT, Skill } from './types'

export function Skills({ saveStep, visibility, toggleResume, userData = {} }: ComponentProps) {
  const { Skills } = userData
  const [skills, setSkills] = useState<AllUserDataT["Skills"]>(Skills || [])
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)

  useEffect(() => {
    if (!userData.Skills || userData.Skills.length === 0) {
      return
    }

    setSkills(userData.Skills)
  }, [userData])

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <h1 className="w-full text-center text-xl text-affair-400 mb-2">About You</h1>
        <Input value={fName} onChange={setFname} placeholder='First Name' />
        <Input value={email} onChange={setEmail} placeholder='Email Address' />
        <div className="w-full flex justify-between">
          <button 
            onClick={handleAddMoreClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >{activeIndex === experiences.length ? 'Add Experience' : 'Save Changes'}</button>
          <button 
            onClick={handleButtonClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >Save</button>
        </div>
      </div>
    </div>
  )
}
