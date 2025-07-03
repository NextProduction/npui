import { Badge } from "@/components/ui/badge"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const badgeProps: PropDetail[] = [
  {
    name: "variant",
    type: `"default" | "secondary" | "destructive" | "outline"`,
    description: "The visual style of the badge.",
    default: `"default"`,
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the badge.",
  },
]

export const badgeVariants: ComponentVariant[] = [
  {
    title: "Default Badge",
    description: "A standard badge for general tagging or categorization.",
    code: `import { Badge } from "@/components/ui/badge";

export function DefaultBadge() {
  return <Badge>New</Badge>;
}`,
    preview: <Badge>New</Badge>,
  },
  {
    title: "Secondary Badge",
    description: "A less prominent badge for secondary information.",
    code: `import { Badge } from "@/components/ui/badge";

export function SecondaryBadge() {
  return <Badge variant="secondary">Beta</Badge>;
}`,
    preview: <Badge variant="secondary">Beta</Badge>,
  },
  {
    title: "Destructive Badge",
    description: "A badge indicating a warning or error state.",
    code: `import { Badge } from "@/components/ui/badge";

export function DestructiveBadge() {
  return <Badge variant="destructive">Error</Badge>;
}`,
    preview: <Badge variant="destructive">Error</Badge>,
  },
  {
    title: "Outline Badge",
    description: "A badge with an outline, often used for alternative styling.",
    code: `import { Badge } from "@/components/ui/badge";

export function OutlineBadge() {
  return <Badge variant="outline">Draft</Badge>;
}`,
    preview: <Badge variant="outline">Draft</Badge>,
  },
]
