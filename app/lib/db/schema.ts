import { Generated, ColumnType } from "kysely";

interface GoalTrackingTable {
  id: Generated<number>;
  habit_id: number;
  created_at: ColumnType<Date, string | undefined, never>;
}

// Keys of this interface are table names.
export interface Database {
  goal_tracking: GoalTrackingTable;
}
