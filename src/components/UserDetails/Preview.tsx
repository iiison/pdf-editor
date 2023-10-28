import type { ComponentProps, AllUserDataT, ExperienceT } from './types'

type Props = {
  userData: Partial<AllUserDataT>
}

export function Preview({ userData }: Props) {
  const { about } = userData

  return (
    <div className="flex border-2 border-affair-200 w-full h-full overflow-y-auto p-4">
      {about && (
        <div className="w-full flex flex-wrap">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
            {/* @ts-ignore */}
            {about.image && <img src={about?.image} className="w-full" />}
          </div>
          <div className="">
            <h1>{about.fName} {about.lName}</h1>
            <p className="w-full">{about.about}</p>
          </div>
        </div>
      )}
    </div>
  )
}
