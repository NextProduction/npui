import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const switchProps: PropDetail[] = [
  {
    name: "checked",
    type: "boolean",
    description: "The controlled checked state of the switch.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Event handler called when the checked state changes.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "The initial checked state of the switch.",
    default: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the switch is disabled.",
    default: "false",
  },
]

export const switchVariants: ComponentVariant[] = [
  {
    title: "Default Switch",
    description: "A basic switch for toggling between two states.",
    code: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function DefaultSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`,
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
  },
  {
    title: "Disabled Switch",
    description: "A disabled switch.",
    code: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function DisabledSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-mode" disabled />
      <Label htmlFor="disabled-mode">Disabled Mode</Label>
    </div>
  )
}`,
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="disabled-mode" disabled />
        <Label htmlFor="disabled-mode">Disabled Mode</Label>
      </div>
    ),
  },
]
