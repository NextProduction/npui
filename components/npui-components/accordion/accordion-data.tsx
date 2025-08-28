import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const accordionProps: PropDetail[] = [
  {
    name: "type",
    type: `"single" | "multiple"`,
    description: "Determines if one or multiple items can be open at a time.",
    default: `"single"`,
  },
  {
    name: "collapsible",
    type: "boolean",
    description: "When type is 'single', allows the currently open item to be closed.",
    default: "false",
  },
  {
    name: "value",
    type: "string",
    description: "The controlled value of the open accordion item(s).",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "The initial value of the open accordion item(s).",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Event handler called when the value changes.",
  },
]

export const accordionVariants: ComponentVariant[] = [
  {
    title: "Default Accordion",
    description: "A basic accordion with a single collapsible item.",
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DefaultAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that you can override.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    preview: (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that you can override.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    title: "Multiple Accordion",
    description: "An accordion that allows multiple items to be open simultaneously.",
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MultipleAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is Next.js?</AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building full-stack web applications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    preview: (
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>React is a JavaScript library for building user interfaces.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Next.js?</AccordionTrigger>
          <AccordionContent>Next.js is a React framework for building full-stack web applications.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
]
