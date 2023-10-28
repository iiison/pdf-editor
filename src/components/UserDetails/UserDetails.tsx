import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Datepicker from "tailwind-datepicker-react"

import About from './About'
import { Input, TextArea } from './Input'

import type { ComponentProps } from './types'

type ExperienceT = {
  companyName: string;
}

function Experience({ saveStep, visibility }: ComponentProps) {
  const dateOptions = {
    title: "Demo Title",
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date(),
    theme: {
      background: "bg-mirage-800",
      todayBtn: "",
      clearBtn: "",
      icons: "text-affair-300",
      text: "text-affair-300",
      disabledText: "bg-mirage-100",
      input: "text-mirage-800",
      inputIcon: "text-affair-300",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en",
  }
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
  const fromOptions = {
    ...dateOptions,
    title: "Set Start Date",
  }
  const toOptions = {
    ...dateOptions,
    title: "Set End Date"
  }

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
        <div className="relative">
          <Datepicker 
            show={showFrom}
            setShow={toggleFrom} 
            options={fromOptions}
            onChange={handleDateSet(setFrom)}
          />
        </div>
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

function Orange() {
  return <div>Orange</div>
}

function Yellow() {
  return <div>Yellow</div>
}

export default function UserDetails() {
  const [showResume, toggleResume] = useState(true)
  const [currentStep, setStep] = useState(0)
  const [userData, setUserData] = useState<Record<string, string | number | File | undefined>>({})

  const handleDataSave = (data: Record<string, string | number | File | undefined>) => {
    setStep(currentStep + 1)
    setUserData({
      ...userData,
      ...data
    })
  } 

  // const Order: ((data: ComponentProps) => JSX.Element)[] = [About, Experience, Orange, Yellow]
  const Order: ((data: ComponentProps) => JSX.Element)[] = [Experience, Orange, Yellow]

  return (
    <div className="h-[calc(100vh - 67px)] w-full overflow-hidden flex">
      <div className={`flex h-full ${showResume ? 'w-1/2 flex-row' : 'w-full'}`}>
        {Order.map((component, index) => component(
          {
            saveStep: handleDataSave,
            visibility: index === currentStep,
            toggleResume,
          }
        ))}
      </div>
      {showResume && (
        <div className="flex w-1/2">Resume</div>
      )}
    </div>
  )
}
