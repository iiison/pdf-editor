type Props = {
  title: string;
  details: string;
  status: 'pending' | 'done' | 'inProgress';
}
export default function ScheduleCard({ title, details, status }: Props) {
  const tagClasses = {
    'pending': 'text-red bg-red/25',
    'done': 'text-green bg-green/25',
    'inProgress': 'text-affair-400/80 bg-affair-500/30',
  }

  const statusToText = {
    'pending': 'Pending',
    'done': 'Done',
    'inProgress': 'In Progress'
  }

  return (
    <div className="w-full flex-col relative rounded-lg border border-mirage-700/70 font-[200] cursor-pointer hover:border-white/50">
      <div className="w-full p-3 flex relative text-lg font-[300]">
        {title}
        <span className={`absolute text-sm px-2 py-1 rounded rounded top-2 right-2 ${tagClasses[status]}`}>{statusToText[status]}</span>
      </div>
      <div className="w-full px-3 pb-3 flex relative text-sm">
        {details}
      </div>
    </div>
  )
}
