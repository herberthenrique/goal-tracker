/*
  Warnings:

  - You are about to drop the column `descriton` on the `Habit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "descriton",
ADD COLUMN     "description" TEXT;
