"use client"

import { Calendar } from "@/components/ui/calendar"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const calendarProps: PropDetail[] = [
  {
    name: "mode",
    type: `"single" | "multiple" | "range"`,
    description: "The selection mode of the calendar.",
    default: `"single"`,
  },
  {
    name: "selected",
    type: "Date | Date[] | { from: Date; to?: Date }",
    description: "The selected date(s).",
  },
  {
    name: "onSelect",
    type: "(date: Date | Date[] | { from: Date; to?: Date }) => void",
    description: "Callback function when a date is selected.",
  },
  {
    name: "initialFocus",
    type: "boolean",
    description: "Whether the calendar should receive focus on mount.",
    default: "false",
  },
  {
    name: "disabled",
    type: "boolean | ((date: Date) => boolean)",
    description: "Disables specific dates or the entire calendar.",
    default: "false",
  },
]

export const calendarVariants: ComponentVariant[] = [
  {
    title: "Default Calendar (Single Select)",
    description: "A calendar for selecting a single date.",
    code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function SingleSelectCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
      className="rounded-md border"
    />
  );
}`,
    preview: (
      <Calendar mode="single" selected={new Date()} onSelect={() => {}} initialFocus className="rounded-md border" />
    ),
  },
  {
    title: "Range Select Calendar",
    description: "A calendar for selecting a range of dates.",
    code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker"; // Import type

export function RangeSelectCalendar() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      initialFocus
      className="rounded-md border"
    />
  );
}`,
    preview: (
      <Calendar
        mode="range"
        selected={{
          from: new Date(),
          to: new Date(new Date().setDate(new Date().getDate() + 7)),
        }}
        onSelect={() => {}}
        initialFocus
        className="rounded-md border"
      />
    ),
  },
]
