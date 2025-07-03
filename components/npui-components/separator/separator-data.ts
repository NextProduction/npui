import { Separator } from "@/components/ui/separator"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const separatorProps: PropDetail[] = [
  {
    name: "orientation",
    type: `"horizontal" | "vertical"`,
    description: "The orientation of the separator.",
    default: `"horizontal"`,
  },
  {
    name: "decorative",
    type: "boolean",
    description: "Whether the separator is purely decorative and not semantic.",
    default: "false",
  },
]

export const separatorVariants: ComponentVariant[] = [
  {
    title: "Horizontal Separator",
    description: "A horizontal line to visually separate content.",
    code: `import { Separator } from "@/components/ui/separator";

export function HorizontalSeparator() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`,
    preview: (
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
  },
  {
    title: "Vertical Separator",
    description: "A vertical line to visually separate content, often used in navigation or lists.",
    code: `import { Separator } from "@/components/ui/separator";

export function VerticalSeparator() {
  return (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
    </div>
  )
}`,
    preview: (
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Item 1</div>
        <Separator orientation="vertical" />
        <div>Item 2</div>
        <Separator orientation="vertical" />
        <div>Item 3</div>
      </div>
    ),
  },
]
