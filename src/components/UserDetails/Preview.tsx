import type { ComponentProps, AllUserDataT, ExperienceT } from './types'

type Props = {
  userData: Partial<AllUserDataT>
}

export function Preview({ userData }: Props) {
  const { about, experiences } = userData

  return (
    <div className="flex border-2 border-affair-200 w-full h-full overflow-y-auto p-4">
      {about && (
        <div className="w-full flex flex-col">
          <div className="flex w-full flex-wrap">
            <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
              {/* @ts-ignore */}
              {about.image && <img src={about?.image} className="w-full" />}
            </div>
            <div className="">
              <h1>{about.fName} {about.lName}</h1>
              <p className="w-full">{about.about}</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap">
            {experiences && experiences.length > 0 && (
              <ul className="flex w-full flex-col">
                <li className="w-full text-[25px] my-5 font-bold">Experiences</li>
                {experiences.map((exp) => (
                  <li>
                    {exp.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
