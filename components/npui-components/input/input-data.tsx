import { Input } from "@/components/ui/input" // Corrected import
import { Label } from "@/components/ui/label" // Corrected import
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const inputProps: PropDetail[] = [
  {
    name: "type",
    type: "string",
    description: "The type of the input (e.g., 'text', 'email', 'password').",
    default: `"text"`,
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text for the input field.",
  },
  {
    name: "id",
    type: "string",
    description: "The unique ID for the input element.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the input is disabled.",
    default: "false",
  },
]

export const inputVariants: ComponentVariant[] = [
  {
    title: "Basic Input",
    description: "A standard text input field.",
    code: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MyInput() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}`,
    preview: (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    ),
  },
]
