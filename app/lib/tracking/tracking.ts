import { Habit } from "../habit/habit";

export interface Tracking {
  total: number;
  habitId: number;
}

export interface TrackingHabit extends Tracking {
  habit: Habit;
  percentage: number;
}

export function getTrackingsWithHabits(habits: Habit[]): TrackingHabit[] {
  const trackings = getTrackings();
  return trackings.map<TrackingHabit>((tracking) => {
    const habit = habits.find((h) => h.id === tracking.habitId);
    if (habit === null) {
      throw new Error("Tracking without habit created");
    }
    const myHabit = habit as Habit;
    const percentage = (tracking.total * 100) / myHabit.goal;
    return {
      ...tracking,
      habit: myHabit,
      percentage,
    };
  });
}

export function getTrackings(): Tracking[] {
  return [
    {
      total: 1,
      habitId: 1,
    },
  ];
}
