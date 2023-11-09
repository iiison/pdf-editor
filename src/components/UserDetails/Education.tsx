import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, UserDataT, EducationT } from './types'

export function Education({ saveStep, visibility, userData }: ComponentProps) {
  const DEFAULT_EDU = {
    name: '',
    degree: '',
    from: '',
    to: '',
    grade: '',
    details: '',
    major: '',
  }
  const { Education : userEdu } = userData
  const [educations, setExperiences] = useState<EducationT[]>(userEdu || [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [education, setExperience] = useState<EducationT>(userEdu?.[0] || DEFAULT_EDU)

  const handleButtonClick = () => {
    if (educations.length !== 0) {
      saveStep({
        /* @ts-ignore */
        educations
      })
    }
  }

  const handleEduTagClick = (index: number) => () => {
    if (!educations) {
      return
    }

    setActiveIndex(index)
    setExperience(educations[index])
  }

  const handleAddMoreClick = () => {
    setExperiences((prev = []) => {
      const prevCopy = [...prev]

      prevCopy[activeIndex] = education

      return prevCopy
    })

    setActiveIndex(activeIndex + 1)
    setExperience(DEFAULT_EDU)
  }

  const handleFieldChange = (fieldName: keyof EducationT) => (value: string) => {
    setExperience((prev) => ({
      ...prev,
      [fieldName]: value
    }))
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <div className="flex w-full gap-2">
          {educations && educations.length > 0 && (
            <ul className="w-full flex gap-2">
              {educations.map((exp, index) => (
                <li 
                  key={`${exp.name}_${index}`}
                  onClick={handleEduTagClick(index)}
                  className="bg-affair-700 text-white rounded-md py-1 px-2 cursor-pointer"
                >{exp?.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-col flex w-full gap-3">
          {/*@ts-ignore*/}
          <Input value={education.name} onChange={handleFieldChange('name')} placeholder='Institute Name' />
          {/*@ts-ignore*/}
          <Input value={education.degree} onChange={handleFieldChange('degree')} placeholder='Degree' />
          {/*@ts-ignore*/}
          <Input value={education.major} onChange={handleFieldChange('major')} placeholder='Major' />
          {/*@ts-ignore*/}
          <Input value={education.from} onChange={handleFieldChange('from')} placeholder='Start Date (MM/YYYY)' />
          {/*@ts-ignore*/}
          <Input value={education.to} onChange={handleFieldChange('to')} placeholder='End Date (MM/YYYY)' />
          {/*@ts-ignore*/}
          <Input value={education.grade} onChange={handleFieldChange('grade')} placeholder='Grade' />
          <TextArea value={education.details || ''} onChange={handleFieldChange('details')} placeholder='Add Details' />
          <div className="w-full flex justify-between">
            <button 
              onClick={handleAddMoreClick}
              className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
            >{activeIndex === educations.length ? 'Add More' : 'Save Changes'}</button>
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
