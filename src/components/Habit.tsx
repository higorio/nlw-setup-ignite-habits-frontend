interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return <div className="bg-green-800 text-green-50 w-10 h-10 flex items-center justify-center m-2 p-2">{props.completed}</div>
}