export interface Habit {
  id: number;
  name: string;
  description: string | null;
  goal: number;
  formmatedGoal: string;
}

export async function getHabits(): Promise<Habit[]> {
  return [
    {
      id: 1,
      name: "🏋🏻‍♂️ Exercise",
      description: "Energize my body and sharpen my mind",
      goal: 120,
      formmatedGoal: "120 Days",
    },
  ];
}
