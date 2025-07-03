import { Slider } from "@/components/ui/slider"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const sliderProps: PropDetail[] = [
  {
    name: "defaultValue",
    type: "number[]",
    description: "The initial value of the slider.",
  },
  {
    name: "value",
    type: "number[]",
    description: "The controlled value of the slider.",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "Event handler called when the value changes.",
  },
  {
    name: "max",
    type: "number",
    description: "The maximum value of the slider.",
    default: "100",
  },
  {
    name: "min",
    type: "number",
    description: "The minimum value of the slider.",
    default: "0",
  },
  {
    name: "step",
    type: "number",
    description: "The step increment for the slider.",
    default: "1",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the slider is disabled.",
    default: "false",
  },
]

export const sliderVariants: ComponentVariant[] = [
  {
    title: "Default Slider",
    description: "A basic slider for selecting a single value.",
    code: `import { Slider } from "@/components/ui/slider"

export function DefaultSlider() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}`,
    preview: <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />,
  },
  {
    title: "Range Slider",
    description: "A slider for selecting a range of values.",
    code: `import { Slider } from "@/components/ui/slider"

export function RangeSlider() {
  return <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />
}`,
    preview: <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />,
  },
]
