import { useState } from 'react'

import { About } from './About'
import { Experience } from './Experience'
import { Education } from './Education'
import { Preview } from './Preview'

import type { ComponentProps, AllUserDataT } from './types'

function Orange() {
  return <div>Orange</div>
}

function Yellow() {
  return <div>Yellow</div>
}

export default function UserDetails() {
  const [showResume, toggleResume] = useState(true)
  const [currentStep, setStep] = useState(0)
  const [userData, setUserData] = useState<Partial<AllUserDataT>>({})

  const handleDataSave = (data: Partial<AllUserDataT>) => {
    setStep(currentStep + 1)
    setUserData({
      ...userData,
      ...data
    })
  } 

  const handleStepChangeClick = (index: number) => () => {
    setStep(index)
  }

  const Order: ((data: ComponentProps) => JSX.Element)[] = [About, Experience, Education]

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
      <div className="w-1/2 flex">
        <Preview userData={userData} onSectionClick={handleStepChangeClick} />
      </div>
    </div>
  )
}
