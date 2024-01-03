import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.habit.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "🏋🏻‍♂️ Exercise",
      description: "Energize my body and sharpen my mind",
      goal: 120,
      formmatedGoal: "120 Days",
    },
  });

  await prisma.goalTracking.upsert({
    where: { id: 1 },
    update: {},
    create: {
      date: new Date(),
      habitId: 1,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
