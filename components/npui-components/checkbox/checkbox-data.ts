import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const checkboxProps: PropDetail[] = [
  {
    name: "checked",
    type: "boolean | 'indeterminate'",
    description: "The controlled checked state of the checkbox.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean | 'indeterminate') => void",
    description: "Event handler called when the checked state changes.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "The initial checked state of the checkbox.",
    default: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the checkbox is disabled.",
    default: "false",
  },
]

export const checkboxVariants: ComponentVariant[] = [
  {
    title: "Default Checkbox",
    description: "A basic checkbox with a label.",
    code: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function DefaultCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`,
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
  },
  {
    title: "Disabled Checkbox",
    description: "A disabled checkbox.",
    code: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function DisabledCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-terms" disabled />
      <Label htmlFor="disabled-terms">Accept terms (disabled)</Label>
    </div>
  )
}`,
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-terms" disabled />
        <Label htmlFor="disabled-terms">Accept terms (disabled)</Label>
      </div>
    ),
  },
]
