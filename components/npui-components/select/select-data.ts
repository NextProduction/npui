import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const selectProps: PropDetail[] = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the item that should be selected when initially rendered.",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the selected item.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the value changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the select is disabled.",
    default: "false",
  },
]

export const selectVariants: ComponentVariant[] = [
  {
    title: "Default Select",
    description: "A basic select component for choosing an option from a dropdown list.",
    code: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DefaultSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`,
    preview: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
  },
]
