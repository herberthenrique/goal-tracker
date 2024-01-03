import { Habit } from "@/app/lib/habit/habit";

interface MyHabitsProps {
  habits: Habit[];
}

export function MyHabits({ habits }: MyHabitsProps) {
  return (
    <section className="px-5 py-10 md:p-24">
      <div className="items-start flex flex-col pb-8 w-full">
        <div className="text-gray-800 text-5xl font-bold self-stretch w-full max-md:max-w-full max-md:text-4xl">
          Habits
        </div>
        <div className="self-stretch w-full mt-8 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {habits.map((habit) => (
              <HabitCard key={habit.name} habit={habit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface HabitCardProps {
  habit: Habit;
}

function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
      <div className="justify-center items-stretch bg-slate-50 flex grow flex-col w-full pl-4 pr-16 py-12 rounded-3xl max-md:mt-8 max-md:pr-5">
        <div className="text-black text-5xl font-light max-md:text-4xl">
          {habit.name}
        </div>
        <div className="text-black text-base font-light mt-2.5">
          {habit.description} <br />
          <span className="font-bold">Goal:</span> {habit.formmatedGoal}
        </div>
      </div>
    </div>
  );
}
