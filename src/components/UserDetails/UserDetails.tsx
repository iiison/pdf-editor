import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { About } from './About'
import { Experience } from './Experience'
import { Education } from './Education'
import { Preview } from './Preview'
import { GeneratePdf } from './GeneratePdf'

import type { ComponentProps, AllUserDataT } from './types'

export default function UserDetails() {
  const { state } = useLocation()
  const [showResume, toggleResume] = useState(true)
  const [currentStep, setStep] = useState(0)
  const [userData, setUserData] = useState<Partial<AllUserDataT>>(state || {})

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

  const Order: ((data: ComponentProps | any) => JSX.Element)[] = [About, Experience, Education, GeneratePdf]

  return (
    <div className="h-[calc(100vh - 67px)] w-full overflow-hidden flex">
      <div className={`flex h-full ${showResume ? 'w-1/2 flex-row' : 'w-full'}`}>
        {Order.map((component, index) => component(
          {
            key: index,
            saveStep: handleDataSave,
            visibility: index === currentStep,
            toggleResume,
            userData,
          }
        ))}
      </div>
      <div className="w-1/2 flex">
        <Preview userData={userData} onSectionClick={handleStepChangeClick} />
      </div>
    </div>
  )
}
