import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { Input, TextArea } from './Input'
import type { ComponentProps, UserDataT } from './types'

export function About({ saveStep, visibility, toggleResume, userData = {} }: ComponentProps) {
  const { about: userDetails = {} } = userData
  const [image, setImage] = useState<UserDataT["image"]>(userDetails.image || '')
  const [fName, setFname] = useState<string>(userDetails.fName || '')
  const [lName, setLname] = useState<string>(userDetails.lName || '')
  const [about, setAbout] = useState<string>(userDetails.about || '')
  const [phone, setPhone] = useState<string>(userDetails.phone || '')
  const [email, setEmail] = useState<string>(userDetails.email || '')

  useEffect(() => {
    if (!userData.about) {
      return
    }

    const data = userData.about

    setFname(data.fName || '')
    setImage(data.image || '')
    setLname(data.lName || '')
    setAbout(data.about || '')
    setPhone(data.phone || '')
    setEmail(data.email || '')
  }, [userData])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const reader = new FileReader()

      reader.addEventListener('load', (event) => {

        setImage(event.target?.result)
      })

      reader.readAsDataURL(event.target.files[0])
    }
  }

  const handleButtonClick = () => {
    if (fName && lName && about) {
      saveStep({
        about: {
          fName,
          lName,
          about,
          image,
          phone,
          email
        }
      })
    }
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex-col flex gap-3 w-1/2">
        <h1 className="w-full text-center text-xl text-affair-400 mb-2">About You</h1>
        <Input value={fName} onChange={setFname} placeholder='First Name' />
        <Input value={lName} onChange={setLname} placeholder='Last Name' />
        <TextArea value={about} onChange={setAbout} placeholder='About You' />
        <input type="file" className="w-full" onChange={handleFileChange} />
        <Input value={phone} onChange={setPhone} placeholder='Phone Number' />
        <Input value={email} onChange={setEmail} placeholder='Email Address' />
        <button 
          onClick={handleButtonClick}
          className="rounded rounded-md hover:bg-affair-600 py-2 border border-affair-400 text-affair-300 hover:text-white mt-3"
        >Save</button>
      </div>
    </div>
  )
}
