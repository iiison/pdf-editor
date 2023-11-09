import type { ComponentProps, AllUserDataT, ExperienceT } from './types'

type Props = {
  userData: Partial<AllUserDataT>;
  onSectionClick: (index: number) => () => void
}

export function Preview({ userData, onSectionClick }: Props) {
  const { about, workExperience: experiences, Education: educations } = userData

  return (
    <div className="flex border-2 border-affair-200 w-full h-full overflow-y-auto p-4">
      {about && (
        <div className="w-full flex flex-col">
          <div className="flex w-full flex-wrap items-center mb-6 border border-transparent hover:border-affair-300" onClick={onSectionClick(1)}>
            <div className="h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-affair-400">
              {/* @ts-ignore */}
              {about.image && <img src={about?.image} className="w-full" />}
            </div>
            <div className="w-[calc(100%-180px)] ml-auto">
              <h1 className="text-3xl text-affair-500 mb-3">{about.fName} {about.lName}</h1>
              <p className="w-full text-sm">{about.about}</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap border border-transparent hover:border-affair-300" onClick={onSectionClick(2)}>
            {experiences && experiences.length > 0 && (
              <ul className="flex w-full flex-col">
                <li className="w-full text-affair-400 text-2xl my-3">Experiences</li>
                {experiences.map((exp) => (
                  <li className="flex flex-col mb-4">
                    <div className="flex items-center">
                      <span className="text-xl">
                        {exp.Company}
                      </span>
                      <span className="ml-auto text-sm">
                        {exp.Duration}
                      </span>
                    </div>
                    <span className="text-affair-400 text-sm">{exp.Position} {exp.location ? `({exp.location})` : ''}</span>
                    <p className="my-2 text-sm">{exp.details}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex w-full flex-wrap border border-transparent hover:border-affair-300" onClick={onSectionClick(3)}>
            {educations && educations.length > 0 && (
              <ul className="flex w-full flex-col">
                <li className="w-full text-affair-400 text-2xl my-3">Education</li>
                {educations.map((edu) => (
                  <li className="flex flex-col mb-4">
                    <div className="w-full flex items-center flex-wrap">
                      <span className="text-xl w-full">
                        {edu.Institution}
                      </span>
                      <span className="text-affair-400 text-sm">{edu.Degree} {edu.grade ? `(${edu.grade})` : ''} &nbsp;</span>
                      <span className="text-sm">
                        {edu.Year}
                      </span>
                      <p className="my-2 text-sm w-full">{edu.details}</p>
                    </div>
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
