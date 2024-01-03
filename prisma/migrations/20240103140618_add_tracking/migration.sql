-- CreateTable
CREATE TABLE "GoalTracking" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "habitId" INTEGER NOT NULL,

    CONSTRAINT "GoalTracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GoalTracking" ADD CONSTRAINT "GoalTracking_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
