import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const radioGroupProps: PropDetail[] = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the radio item that should be checked when initially rendered.",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the checked radio item.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the checked state changes.",
  },
  {
    name: "orientation",
    type: `"horizontal" | "vertical"`,
    description: "The orientation of the radio group.",
    default: `"vertical"`,
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the radio group is disabled.",
    default: "false",
  },
]

export const radioGroupVariants: ComponentVariant[] = [
  {
    title: "Default Radio Group",
    description: "A group of radio buttons for selecting a single option.",
    code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function DefaultRadioGroup() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`,
    preview: (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    ),
  },
  {
    title: "Horizontal Radio Group",
    description: "Radio buttons arranged horizontally.",
    code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function HorizontalRadioGroup() {
  return (
    <RadioGroup defaultValue="option-one" orientation="horizontal" className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="ho1" />
        <Label htmlFor="ho1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="ho2" />
        <Label htmlFor="ho2">Option Two</Label>
      </div>
    </RadioGroup>
  )
}`,
    preview: (
      <RadioGroup defaultValue="option-one" orientation="horizontal" className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="ho1" />
          <Label htmlFor="ho1">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="ho2" />
          <Label htmlFor="ho2">Option Two</Label>
        </div>
      </RadioGroup>
    ),
  },
]
