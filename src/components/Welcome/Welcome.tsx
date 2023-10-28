import { Dispatch, SetStateAction } from 'react';

export default function Welcome({ onClick }: {
  onClick: Dispatch<SetStateAction<boolean>>
}) {
  const handleClick = () => onClick(true);

  return (
    <div className="bg-gradient-to-b from-affair-500 to-affair-700 bg-a w-full h-full text-white items-center justify-center flex">
      <div>
        <button className="text-affair-700 bordered rounded-md bg-white px-3 py-2 hover:bg-affair-100" onClick={handleClick}>Generate My Resume</button>
      </div>
    </div>
  )
}
