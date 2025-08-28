import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const tooltipProps: PropDetail[] = [
  {
    name: "open",
    type: "boolean",
    description: "Controls the open state of the tooltip.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state changes.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    description: "The initial open state of the tooltip.",
    default: "false",
  },
  {
    name: "delayDuration",
    type: "number",
    description: "The duration in milliseconds before the tooltip opens.",
    default: "700",
  },
]

export const tooltipVariants: ComponentVariant[] = [
  {
    title: "Default Tooltip",
    description: "A basic tooltip that appears on hover.",
    code: `import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function DefaultTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
]
