import { Habit } from "../habit/habit";

export interface Tracking {
  count: number;
  habitId: number;
}

export interface TrackingHabit extends Tracking {
  habit: Habit;
  percentage: number;
}

export async function getTrackingsWithHabits(
  habits: Habit[]
): Promise<TrackingHabit[]> {
  const trackings = await getTrackings();
  return trackings.map<TrackingHabit>((tracking) => {
    const habit = habits.find((h) => h.id === tracking.habitId);
    if (habit === null) {
      throw new Error("Tracking without habit created");
    }
    const myHabit = habit as Habit;
    const percentage = (tracking.count * 100) / myHabit.goal;
    return {
      ...tracking,
      habit: myHabit,
      percentage,
    };
  });
}

export async function getTrackings(): Promise<Tracking[]> {
  const groupGoalTracking = await prisma?.goalTracking.groupBy({
    by: "habitId",
    _sum: {
      id: true,
    },
  });

  return (
    groupGoalTracking?.map<Tracking>((group) => {
      return {
        count: group._sum.id || 0,
        habitId: group.habitId,
      };
    }) || []
  );
}
