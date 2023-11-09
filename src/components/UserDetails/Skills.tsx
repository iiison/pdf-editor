import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, AllUserDataT, Skill } from './types'

export function Skills({ saveStep, visibility, toggleResume, userData = {} }: ComponentProps) {
  const { Skills } = userData
  const [skills, setSkills] = useState<AllUserDataT["Skills"]>(Skills || [])
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [skill, setSkill] = useState(skills[activeSkillIndex])

  useEffect(() => {
    if (!userData.Skills || userData.Skills.length === 0) {
      return
    }

    setSkills(userData.Skills)
  }, [userData])

  const handleAddMoreClick = () => {
    setSkills((prev = []) => {
      const copy = [...prev]

      copy[activeSkillIndex] = skill

      return copy
    })

    setActiveSkillIndex(activeSkillIndex + 1)
    setSkill('')
  }

  const handleTagClick = (index: number) => () => {
    setActiveSkillIndex(index)
    setSkill(skills[index])
  }

  const handleFieldChange = (index: number) => (value: string) => {
    setSkills((prevState) => {
      const copy = [...prevState]

      copy[index] = value

      return copy
    })
  }

  const handleButtonClick = () => {
    if (skills.length === 0) {
      return
    }

    saveStep({
      Skills: skills
    })
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <h1 className="w-full text-center text-xl text-affair-400 mb-2">About You</h1>
        {skills && skills.length > 0 && (
          <ul className="w-full flex flex-wrap gap-2">
            {skills.map((s, index) => (
              <li 
                key={`${s}_${index}`}
                onClick={handleTagClick(index)}
                className="bg-affair-700 text-white rounded-md py-1 px-2 cursor-pointer"
              >{index}</li>
            ))}
          </ul>
        )}
        <Input value={skill} onChange={setSkill} placeholder='Enter Skill' />
        <div className="w-full flex justify-between">
          <button 
            onClick={handleAddMoreClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >{activeSkillIndex === skills.length ? 'Add Skill' : 'Save Changes'}</button>
          <button 
            onClick={handleButtonClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >Save</button>
        </div>
      </div>
    </div>
  )
}
