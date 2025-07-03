"use client"

import { CardHeader } from "@/components/ui/card"

import React, { useState, useMemo, useEffect } from "react"
import { npuiComponents } from "@/lib/components-data"
import { CodeEditor } from "@/components/code-editor"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PropControls } from "@/components/playground/prop-controls"
import { playgroundComponentMap } from "@/components/playground/component-map"
import { formatJsxProp } from "@/lib/utils/format-jsx-prop"

export default function PlaygroundPage() {
  const [selectedComponentSlug, setSelectedComponentSlug] = useState<string | undefined>(undefined)
  const [componentProps, setComponentProps] = useState<Record<string, any>>({})

  const selectedComponentData = useMemo(() => {
    return npuiComponents.find((comp) => comp.slug === selectedComponentSlug)
  }, [selectedComponentSlug])

  const selectedPlaygroundComponent = useMemo(() => {
    if (!selectedComponentSlug) return null
    return playgroundComponentMap[selectedComponentSlug]
  }, [selectedComponentSlug])

  // Reset props when component changes
  useEffect(() => {
    if (selectedComponentData) {
      const initialProps: Record<string, any> = {}
      selectedComponentData.props.forEach((prop) => {
        // Initialize with default value if available and not a complex type
        if (
          prop.default !== undefined &&
          !prop.type.includes("React.ReactNode") &&
          !prop.type.includes("=>") &&
          !prop.type.includes("{")
        ) {
          if (prop.type.includes("boolean")) {
            initialProps[prop.name] = prop.default === "true"
          } else if (prop.type.includes("number") && !prop.type.includes("[]")) {
            initialProps[prop.name] = Number(prop.default)
          } else if (prop.type.includes("number[]")) {
            initialProps[prop.name] = JSON.parse(prop.default) // Assuming default for number[] is a stringified array
          } else {
            initialProps[prop.name] = prop.default.replace(/"/g, "") // Remove quotes for string defaults
          }
        }
      })
      setComponentProps(initialProps)
    } else {
      setComponentProps({})
    }
  }, [selectedComponentData])

  const handlePropChange = (propName: string, newValue: any) => {
    setComponentProps((prevProps) => ({
      ...prevProps,
      [propName]: newValue,
    }))
  }

  const generateCode = useMemo(() => {
    if (!selectedComponentData) return "// Select a component to see its code."

    const componentName = selectedComponentData.name.replace(/\s/g, "") // Remove spaces for JSX name
    const imports = `import { ${componentName} } from "@/components/ui/${selectedComponentData.slug}"`
    // Add other necessary imports for complex components if their render function uses them
    // This is a simplified approach; a real system might parse the render function for imports.
    let additionalImports = ""
    if (selectedComponentSlug === "alert") additionalImports += `\nimport { Terminal } from 'lucide-react'`
    if (selectedComponentSlug === "hover-card")
      additionalImports += `\nimport { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\nimport { CalendarIcon } from 'lucide-react'`
    if (selectedComponentSlug === "tooltip" || selectedComponentSlug === "calendar")
      additionalImports += `\nimport { TooltipProvider } from "@/components/ui/tooltip"`
    if (selectedComponentSlug === "calendar") additionalImports += `\nimport { useState } from "react"`
    if (selectedComponentSlug === "slider") additionalImports += `\nimport { useState } from "react"`
    if (
      selectedComponentSlug === "input" ||
      selectedComponentSlug === "checkbox" ||
      selectedComponentSlug === "radio-group" ||
      selectedComponentSlug === "switch" ||
      selectedComponentSlug === "dialog"
    )
      additionalImports += `\nimport { Label } from "@/components/ui/label"`
    if (selectedComponentSlug === "carousel")
      additionalImports += `\nimport { Card, CardContent } from "@/components/ui/card"`
    if (selectedComponentSlug === "select")
      additionalImports += `\nimport { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select"`
    if (selectedComponentSlug === "accordion")
      additionalImports += `\nimport { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"`
    if (selectedComponentSlug === "tabs")
      additionalImports += `\nimport { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"`
    if (selectedComponentSlug === "dialog")
      additionalImports += `\nimport { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"`
    if (selectedComponentSlug === "dropdown-menu")
      additionalImports += `\nimport { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"`
    if (selectedComponentSlug === "radio-group")
      additionalImports += `\nimport { RadioGroupItem } from "@/components/ui/radio-group"`

    const propStrings = Object.entries(componentProps)
      .map(([propName, value]) => {
        const propDetail = selectedComponentData.props.find((p) => p.name === propName)
        if (!propDetail) return ""
        return formatJsxProp(propName, value, propDetail.type)
      })
      .filter(Boolean) // Remove empty strings
      .join(" ")

    // Special handling for components that need children or specific wrappers
    let componentJsx = `<${componentName} ${propStrings} />`

    if (selectedPlaygroundComponent?.render) {
      // If a custom render function exists, we need to represent its structure.
      // This is a simplification; ideally, the render function itself would be stringified.
      // For now, we'll show a generic wrapper structure.
      if (selectedComponentSlug === "card") {
        componentJsx = `<Card ${propStrings} className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the content of the card. You can put any information here.</p>
  </CardContent>
</Card>`
      } else if (selectedComponentSlug === "alert") {
        componentJsx = `<Alert ${propStrings}>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`
      } else if (selectedComponentSlug === "input") {
        componentJsx = `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="playground-input">Email</Label>
  <Input id="playground-input" placeholder="Email" ${propStrings} />
</div>`
      } else if (selectedComponentSlug === "carousel") {
        componentJsx = `<Carousel className="w-full max-w-xs" ${propStrings}>
  <CarouselContent>
    {Array.from({ length: 3 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <img
                src={\`/placeholder.svg?height=200&width=300&text=Image \${index + 1 || "/placeholder.svg"}\`}
                alt={\`Image \${index + 1}\`}
                className="w-full h-full object-cover rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
      } else if (selectedComponentSlug === "accordion") {
        componentJsx = `<Accordion type="single" collapsible className="w-full" ${propStrings}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It comes with default styles that you can override.</AccordionContent>
  </AccordionItem>
</Accordion>`
      } else if (selectedComponentSlug === "tabs") {
        componentJsx = `<Tabs defaultValue="account" className="w-[400px]" ${propStrings}>
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`
      } else if (selectedComponentSlug === "dialog") {
        componentJsx = `<Dialog ${propStrings}>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
      } else if (selectedComponentSlug === "dropdown-menu") {
        componentJsx = `<DropdownMenu ${propStrings}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Dropdown</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`
      } else if (selectedComponentSlug === "checkbox") {
        componentJsx = `<div className="flex items-center space-x-2">
  <Checkbox id="playground-checkbox" ${propStrings} />
  <Label htmlFor="playground-checkbox">Accept terms and conditions</Label>
</div>`
      } else if (selectedComponentSlug === "radio-group") {
        componentJsx = `<RadioGroup defaultValue="comfortable" ${propStrings}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`
      } else if (selectedComponentSlug === "select") {
        componentJsx = `<Select ${propStrings}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`
      } else if (selectedComponentSlug === "slider") {
        componentJsx = `import { useState } from "react";
// ... other imports
export function MySliderExample() {
  const [value, setValue] = useState(${JSON.stringify(componentProps.defaultValue || [50])});
  return <Slider ${propStrings} value={value} onValueChange={setValue} className="w-[60%]" />;
}`
      } else if (selectedComponentSlug === "switch") {
        componentJsx = `<div className="flex items-center space-x-2">
  <Switch id="playground-switch" ${propStrings} />
  <Label htmlFor="playground-switch">Toggle Feature</Label>
</div>`
      } else if (selectedComponentSlug === "tooltip") {
        componentJsx = `<TooltipProvider>
  <Tooltip ${propStrings}>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover Me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip!</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
      } else if (selectedComponentSlug === "avatar") {
        componentJsx = `<Avatar ${propStrings}>
  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`
      } else if (selectedComponentSlug === "calendar") {
        componentJsx = `import { useState } from "react";
// ... other imports
export function MyCalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
      className="rounded-md border"
      ${propStrings}
    />
  );
}`
      } else if (selectedComponentSlug === "alert-dialog") {
        componentJsx = `<AlertDialog ${propStrings}>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Open Alert</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
      } else if (selectedComponentSlug === "hover-card") {
        componentJsx = `<HoverCard ${propStrings}>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">The React Framework – created and maintained by Vercel.</p>
        <div className="flex items-center pt-2">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">Joined December 2021</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`
      } else if (selectedComponentSlug === "separator") {
        componentJsx = `<Separator ${propStrings} />`
      } else if (selectedComponentSlug === "badge") {
        componentJsx = `<Badge ${propStrings}>Badge Text</Badge>`
      } else if (selectedComponentSlug === "progress") {
        componentJsx = `<Progress ${propStrings} />`
      }
    }

    return `${imports}${additionalImports ? `\n${additionalImports}` : ""}\n\nexport default function MyPlaygroundComponent() {\n  return (\n    ${componentJsx
      .split("\n")
      .map((line) => `    ${line}`)
      .join("\n")
      .trim()}\n  );\n}`
  }, [selectedComponentData, componentProps, selectedPlaygroundComponent, selectedComponentSlug])

  return (
    <div className="container py-12 md:py-24 lg:py-32 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
          npui Playground
        </h1>
        <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl">
          Experiment with npui components in real-time. Adjust props and see the live preview and generated code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Component Selector and Prop Controls */}
        <Card className="lg:col-span-1 border-npui-border bg-npui-card p-6 space-y-6">
          <h2 className="text-2xl font-bold text-npui-foreground">Component & Props</h2>
          <div className="space-y-4">
            <Label htmlFor="component-select" className="text-npui-foreground">
              Select Component
            </Label>
            <Select value={selectedComponentSlug} onValueChange={setSelectedComponentSlug}>
              <SelectTrigger id="component-select" className="w-full">
                <SelectValue placeholder="Choose a component" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>npui Components</SelectLabel>
                  {npuiComponents.map((comp) => (
                    <SelectItem key={comp.slug} value={comp.slug}>
                      {comp.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {selectedComponentData && (
            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-semibold text-npui-foreground">Props for {selectedComponentData.name}</h3>
              <div className="border border-npui-border rounded-md p-4">
                {selectedComponentData.props.length > 0 ? (
                  selectedComponentData.props.map((prop) => (
                    <PropControls
                      key={prop.name}
                      prop={prop}
                      value={componentProps[prop.name]}
                      onChange={(newValue) => handlePropChange(prop.name, newValue)}
                    />
                  ))
                ) : (
                  <p className="text-npui-muted-foreground italic">No customizable props for this component.</p>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* Live Preview and Code Editor */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-npui-border bg-npui-card">
            <CardHeader>
              <h2 className="text-2xl font-bold text-npui-foreground">Live Preview</h2>
            </CardHeader>
            <CardContent className="p-6 flex items-center justify-center min-h-[250px] bg-npui-background rounded-b-md">
              {selectedPlaygroundComponent ? (
                selectedPlaygroundComponent.render ? (
                  selectedPlaygroundComponent.render(componentProps)
                ) : (
                  React.createElement(selectedPlaygroundComponent.component, componentProps)
                )
              ) : (
                <p className="text-npui-muted-foreground">Select a component to see its live preview.</p>
              )}
            </CardContent>
          </Card>

          <Card className="border-npui-border bg-npui-card">
            <CardHeader>
              <h2 className="text-2xl font-bold text-npui-foreground">Generated Code</h2>
            </CardHeader>
            <CardContent className="p-0">
              <CodeEditor code={generateCode} language="tsx" readOnly />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
