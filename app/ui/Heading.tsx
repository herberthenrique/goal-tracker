export default function Heading() {
  const today = new Date();
  const formatter = Intl.DateTimeFormat("en-gb", {
    month: "short",
    day: "2-digit",
  });

  const dayNumber = differenceInDaysFromBeggingOfTheYear(today);

  return (
    <section className="bg-hero-pattern sm:bg-hero-pattern-desktop h-80">
      <div className="px-5 md:px-24 flex justify-center items-end flex-col h-full">
        <div className="text-white text-l md:text-4xl font-light">
          {formatter.format(today)} / Day {dayNumber}
        </div>
        <div className="text-white text-3xl md:text-6xl font-semibold font-['Montserrat Alternates']">
          Herbert’s 2024 Goals
        </div>
      </div>
    </section>
  );
}

export function differenceInDaysFromBeggingOfTheYear(date: Date): number {
  var beginningOfTheYear = new Date("2024-01-01T00:00:00.000+00:00");
  const diff = Math.abs(date.getTime() - beginningOfTheYear.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays;
}
