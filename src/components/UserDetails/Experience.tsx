import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, UserDataT, ExperienceT } from './types'

export function Experience({ saveStep, visibility }: ComponentProps) {
  const DEFAULT_EXP = {
    title: '',
    company: '',
    details: '',
    from: '',
    to: '',
    location: '',
  }
  const [experiences, setExperiences] = useState<ExperienceT[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [experience, setExperience] = useState<ExperienceT>(DEFAULT_EXP)

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
      <div className="flex-col flex gap-3 w-3/4">
        <div className="flex w-full gap-2">
          {experiences && experiences.length > 0 && (
            <ul className="w-full flex gap-2">
              {experiences.map((exp, index) => (
                <li 
                  onClick={handleCompanyTagClick(index)}
                  className="bg-affair-700 text-white rounded-md py-1 px-2 cursor-pointer"
                >{exp?.company}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-col flex w-full gap-3">
          {/*@ts-ignore*/}
          <Input value={experience.company} onChange={handleFieldChange('company')} placeholder='Company Name' />
          {/*@ts-ignore*/}
          <Input value={experience.title} onChange={handleFieldChange('title')} placeholder='Job Title' />
          {/*@ts-ignore*/}
          <Input value={experience.from} onChange={handleFieldChange('from')} placeholder='Start Date (MM/YYYY)' />
          {/*@ts-ignore*/}
          <Input value={experience.to} onChange={handleFieldChange('to')} placeholder='End Date (MM/YYYY)' />
          {/*@ts-ignore*/}
          <Input value={experience.location} onChange={handleFieldChange('location')} placeholder='Location' />
          <TextArea value={experience.details} onChange={handleFieldChange('details')} placeholder='Add Details' />
          <div className="w-full flex justify-between">
            <button 
              onClick={handleAddMoreClick}
              className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
            >{activeIndex === experiences.length ? 'Add More' : 'Save Changes'}</button>
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
