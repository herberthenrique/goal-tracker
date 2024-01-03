import { TrackingHabit } from "@/app/lib/tracking/tracking";
import React from "react";

interface GoalTrackingProps {
  trackingHabits: TrackingHabit[];
}

export function GoalTracking({ trackingHabits }: GoalTrackingProps) {
  return (
    <section className="bg-gray-950 px-5 py-10 md:p-24">
      <div className="items-stretch flex max-w-[500px] flex-col pb-8 text-white">
        <header className=" text-5xl font-bold w-full max-md:max-w-full max-md:text-4xl">
          Tracking
        </header>
        {trackingHabits.map((tracking) => (
          <div key={`tracking-${tracking.habitId}`}>
            <div className="justify-between  text-2xl items-stretch flex w-full gap-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10 mb-1">
              <div className=" font-light">{tracking.habit.name}</div>
              <div className=" text-right font-extrabold">
                {formatPercentage(tracking.percentage)}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-red-700 h-2.5 rounded-full"
                style={{ width: `${tracking.percentage}%` }}
              ></div>
            </div>
            <div className=" text-right text-base font-light w-full mt-2.5 max-md:max-w-full">
              {tracking.total}/{tracking.habit.goal}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatPercentage(percent: number): string {
  const fraction = percent / 100;
  const options = {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  var formatter = new Intl.NumberFormat("en-GB", options);
  return formatter.format(fraction);
}
