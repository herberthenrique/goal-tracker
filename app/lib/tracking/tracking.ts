import { sql } from "kysely";
import { Database } from "../db/schema";
import { Habit } from "../habit/habit";
import { createKysely } from "@vercel/postgres-kysely";

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
  return [{
    count: 66,
    habitId: 1
  }]
  // const db = createKysely<Database>();
  // db.selectFrom;
  // return await db
  //   .selectFrom("goal_tracking")
  //   .select(["habit_id as habitId", sql<number>`count(id)`.as("count")])
  //   .groupBy("habit_id")
  //   .execute();
}
