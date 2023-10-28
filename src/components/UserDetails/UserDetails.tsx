import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Datepicker from "tailwind-datepicker-react"

import { About } from './About'
import { Experience } from './Experience'
import { Input, TextArea } from './Input'

import type { ComponentProps, UserDataT } from './types'

function Orange() {
  return <div>Orange</div>
}

function Yellow() {
  return <div>Yellow</div>
}

export default function UserDetails() {
  const [showResume, toggleResume] = useState(true)
  const [currentStep, setStep] = useState(1)
  const [userData, setUserData] = useState<Partial<UserDataT>>({})

  const handleDataSave = (data: Record<string, string | number | File | undefined>) => {
    setStep(currentStep + 1)
    setUserData({
      ...userData,
      ...data
    })
  } 

  const Order: ((data: ComponentProps) => JSX.Element)[] = [About, Experience]

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
    </div>
  )
}
