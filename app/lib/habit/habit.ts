import prisma from "../database/prisma";

export interface Habit {
  id: number;
  name: string;
  description: string | null;
  goal: number;
  formmatedGoal: string;
}

export async function getHabits(): Promise<Habit[]> {
  const habits = await prisma?.habit.findMany({});

  return habits;
}
