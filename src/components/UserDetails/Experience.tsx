import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, UserDataT, ExperienceT } from './types'

export function Experience({ saveStep, visibility, userData }: ComponentProps) {
  const DEFAULT_EXP = {
    title: '',
    company: '',
    details: '',
    from: '',
    to: '',
    location: '',
    skills: '',
  }
  const { workExperience: userExps } = userData
  const [experiences, setExperiences] = useState<ExperienceT[]>(userExps || [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [experience, setExperience] = useState<ExperienceT>(userExps?.[0] || DEFAULT_EXP)

  console.log(userData.workExperience)

  useEffect(() => {
    if (!userData.workExperience) {
      return
    }

    setExperiences(userData.workExperience)
    setExperience(userData.workExperience[0])
  }, [userData])

  const handleButtonClick = () => {
    if (experiences.length !== 0) {
      saveStep({
        /* @ts-ignore */
        experiences
      })
    }
  }

  const handleCompanyTagClick = (index: number) => () => {
    if (!experiences) {
      return
    }

    setActiveIndex(index)
    setExperience(experiences[index])
  }

  const handleAddMoreClick = () => {
    setExperiences((prev = []) => {
      const prevCopy = [...prev]

      prevCopy[activeIndex] = experience

      return prevCopy
    })

    setActiveIndex(activeIndex + 1)
    setExperience(DEFAULT_EXP)
  }

  const handleFieldChange = (fieldName: keyof ExperienceT) => (value: string) => {
    setExperience((prev) => ({
      ...prev,
      [fieldName]: value
    }))
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <div className="flex w-full gap-2 flex-wrap">
          <h1 className="w-full text-center text-xl text-affair-400 mb-2">Add Work Experience</h1>
          {experiences && experiences.length > 0 && (
            <ul className="w-full flex flex-wrap gap-2">
              {experiences.map((exp, index) => (
                <li 
                  key={`${exp?.Company}_${index}`}
                  onClick={handleCompanyTagClick(index)}
                  className="bg-affair-700 text-white rounded-md py-1 px-2 cursor-pointer"
                >{exp?.Company}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-col flex w-full gap-3">
          {/*@ts-ignore*/}
          <Input value={experience.Company} onChange={handleFieldChange('Company')} placeholder='Company Name' />
          {/*@ts-ignore*/}
          <Input value={experience.Position} onChange={handleFieldChange('Position')} placeholder='Job Title' />
          {/*@ts-ignore*/}
          <Input value={experience.Duration} onChange={handleFieldChange('Duration')} placeholder='Start Date (MM/YYYY)' />
          {/*@ts-ignore*/}
          <Input value={experience.location} onChange={handleFieldChange('location')} placeholder='Duration' />
          <TextArea value={experience.details || ''} onChange={handleFieldChange('details')} placeholder='Add Details (Use New Line For Bullet Points)' />
          <TextArea value={experience.skills || ''} onChange={handleFieldChange('skills')} placeholder='Add Skills Used Separated By Comma' />
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
    </div>
  )
}
