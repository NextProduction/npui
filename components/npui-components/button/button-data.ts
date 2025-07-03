import { Button } from "@/components/ui/button" // Corrected import
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const buttonProps: PropDetail[] = [
  {
    name: "variant",
    type: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`,
    description: "The visual style of the button.",
    default: `"default"`,
  },
  {
    name: "size",
    type: `"default" | "sm" | "lg" | "icon"`,
    description: "The size of the button.",
    default: `"default"`,
  },
  {
    name: "asChild",
    type: "boolean",
    description: "Renders the button as a child of another component, passing its props.",
    default: "false",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the button.",
  },
]

export const buttonVariants: ComponentVariant[] = [
  {
    title: "Default Button",
    description: "The standard primary button.",
    code: `import { Button } from "@/components/ui/button";

export function DefaultButton() {
  return <Button>Click Me</Button>;
}`,
    preview: <Button>Click Me</Button>,
  },
  {
    title: "Secondary Button",
    description: "A less prominent button for secondary actions.",
    code: `import { Button } from "@/components/ui/button";

export function SecondaryButton() {
  return <Button variant="secondary">Learn More</Button>;
}`,
    preview: <Button variant="secondary">Learn More</Button>,
  },
  {
    title: "Outline Button",
    description: "A button with an outline, often used for alternative actions.",
    code: `import { Button } from "@/components/ui/button";

export function OutlineButton() {
  return <Button variant="outline">View Details</Button>;
}`,
    preview: <Button variant="outline">View Details</Button>,
  },
  {
    title: "Destructive Button",
    description: "A button indicating a destructive or irreversible action.",
    code: `import { Button } from "@/components/ui/button";

export function DestructiveButton() {
  return <Button variant="destructive">Delete Item</Button>;
}`,
    preview: <Button variant="destructive">Delete Item</Button>,
  },
]
