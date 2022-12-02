interface Props {
  value: number;
}
export default function Card({ value }: Props) {
  return (
    <div className="flex h-64 w-48 flex-col justify-between rounded-md border border-black bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500">
      <TopCornerValues value={value} />
      <div className="flex justify-center text-8xl">{value}</div>
      <BottomCornerValues value={value} />
    </div>
  );
}

function TopCornerValues({ value }: Props) {
  return (
    <span className="flex justify-between">
      <span className="from-orange-slate-400 relative h-12 w-12  rounded-br-[64px] rounded-tl border-r border-b  border-black bg-gradient-to-br from-slate-100 to-slate-400">
        <span className="absolute left-2 text-3xl">{value}</span>
      </span>
      <span className="relative h-12 w-12 rounded-bl-[64px]  rounded-tr border-l border-b border-black bg-gradient-to-bl from-slate-100 to-slate-400">
        <span className="absolute right-2 text-3xl">{value}</span>
      </span>
    </span>
  );
}

function BottomCornerValues({ value }: Props) {
  return (
    <span className="flex justify-between">
      <span className="relative h-12 w-12 rounded-tr-[64px]  rounded-bl border-r border-t border-black bg-gradient-to-tr from-slate-100 to-slate-400">
        <span className="absolute bottom-1 left-2 text-3xl">{value}</span>
      </span>
      <span className="relative h-12 w-12 rounded-tl-[64px]  rounded-br border-l border-t border-black bg-gradient-to-tl from-slate-100 to-slate-400">
        <span className="absolute right-2 bottom-1 text-3xl">{value}</span>
      </span>
    </span>
  );
}
