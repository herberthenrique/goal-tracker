import Heading from "./ui/Heading";
import { MyHabits } from "./ui/Habits/MyHabits";
import { getHabits } from "./lib/habit/habit";
import { GoalTracking } from "./ui/Tracking/GoalTracking";
import { getTrackingsWithHabits } from "./lib/tracking/tracking";

export default function Home() {
  const habits = getHabits();
  const trackingHabits = getTrackingsWithHabits(habits);
  return (
    <main className="w-screen min-h-screen">
      <Heading />
      <div className="flex flex-col">
        <MyHabits habits={habits} />
        <GoalTracking trackingHabits={trackingHabits} />
      </div>
      {/* <footer>
        Photo by{" "}
        <a href="https://unsplash.com/@mackymendenilla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Macky Mendenilla
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/basketball-hoop-near-gray-chain-link-fence-during-night-aTIghUxTRFI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </footer> */}
    </main>
  );
}
