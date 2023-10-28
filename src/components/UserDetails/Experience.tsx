import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, UserDataT, ExperienceT } from './types'

export function Experience({ saveStep, visibility }: ComponentProps) {
  const [experiences, setExperiences] = useState<ExperienceT[] | undefined>()
  const [title, setTitle] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [from, setFrom] = useState<Date>(new Date())
  const [to, setTo] = useState<Date>(new Date())
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [showFrom, toggleFrom] = useState(false)
  const [showTo, toggleTo] = useState(false)

  const handleButtonClick = () => {
    if (title && location && email && phone) {
      saveStep({
        title,
        location,
        email,
        phone
      })
    }
  }

  const handleAddMoreClick = () => {
    // @ts-ignore
    setExperiences((prev = []) => {
      return [
        ...prev,
        {
          title,
          location,
          company,
          from,
          to,
          details,
        }
      ]
    })

    setCompany('')
    setTitle('')
    setLocation('')
    setFrom(new Date())
    setTo(new Date())
    setDetails('')
  }

  const handleDateSet = (
    stateSetter: Dispatch<SetStateAction<Date>>
  ) => (date: Date | null) => {
    if (!date) {
      return
    }

    stateSetter(date)
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <Input value={company} onChange={setCompany} placeholder='Job Title' />
        <Input value={title} onChange={setTitle} placeholder='Email' />
        <Input value={location} onChange={setLocation} placeholder='Phone Number' />
        <div className="w-full flex justify-between">
          <button 
            onClick={handleAddMoreClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >Add More</button>
          <button 
            onClick={handleButtonClick}
            className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3 w-[48%]"
          >Save</button>
        </div>
      </div>
    </div>
  )
}
