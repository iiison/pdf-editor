import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import type { ComponentProps, AllUserDataT } from './types'

export function UploadJson({
  visibility,
  saveStep,
} : ComponentProps) {
  const [userData, setUserData] = useState<unknown | null>(null)
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const reader = new FileReader()

      reader.addEventListener('load', (event) => {

        try {
          const { target } = event
          const data = target?.result

          if (typeof data !== 'string') {
            throw new Error('Invalid')
          }

          const json = JSON.parse(data)

          setUserData(json)
          saveStep(json as AllUserDataT)
        } catch(error) {
          console.log('Invalid shit')
          setUserData(null)
        }
      })

      reader.readAsText(event.target.files[0])
    }
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${!visibility && 'hidden'}`}>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-row items-center justify-center px-4 py-3 border-2 border-affair-500 rounded-lg cursor-pointer hover:border-affair-600 hover:bg-affair-600">
          <div className="flex items-center justify-center">
            <svg className="w-7 h-7 mr-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="text-base">{userData ? 'Data Uploaded!' : 'Click to upload JSON'}</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div> 

    </div>
  )
}
