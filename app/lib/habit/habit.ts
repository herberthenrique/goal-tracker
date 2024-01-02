export interface Habit {
  id: number;
  name: string;
  description: string;
  goal: number;
  formmatedGoal: string;
}

export function getHabits(): Habit[] {
  return [
    {
      id: 1,
      name: "🏋🏻‍♂️ Exercise",
      description: "Energize your body and sharpen your mind",
      goal: 120,
      formmatedGoal: "120 Days",
    },
  ];
}
