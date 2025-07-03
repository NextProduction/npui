// This file needs to be a client component because it imports and renders other client components
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Terminal, CalendarIcon } from "lucide-react"

// Define a type for the component map entries, including a render function for complex cases
export type PlaygroundComponentEntry = {
  component: React.ComponentType<any>
  render?: (props: any) => React.ReactNode // Custom render function for complex components
}

// This map holds references to the actual React components and, for complex ones,
// a custom render function to provide a basic interactive setup for the playground.
export const playgroundComponentMap: { [key: string]: PlaygroundComponentEntry } = {
  button: { component: Button },
  card: {
    component: Card,
    render: (props) => (
      <Card {...props} className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card. You can put any information here.</p>
        </CardContent>
      </Card>
    ),
  },
  alert: {
    component: Alert,
    render: (props) => (
      <Alert {...props}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    ),
  },
  input: {
    component: Input,
    render: (props) => (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="playground-input">Email</Label>
        <Input id="playground-input" placeholder="Email" {...props} />
      </div>
    ),
  },
  carousel: {
    component: Carousel,
    render: (props) => (
      <Carousel className="w-full max-w-xs" {...props}>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Image%20${index + 1}`}
                      alt={`Image ${index + 1}`}
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
      </Carousel>
    ),
  },
  accordion: {
    component: Accordion,
    render: (props) => (
      <Accordion type="single" collapsible className="w-full" {...props}>
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
  tabs: {
    component: Tabs,
    render: (props) => (
      <Tabs defaultValue="account" className="w-[400px]" {...props}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    ),
  },
  dialog: {
    component: Dialog,
    render: (props) => (
      <Dialog {...props}>
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
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  "dropdown-menu": {
    component: DropdownMenu,
    render: (props) => (
      <DropdownMenu {...props}>
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
      </DropdownMenu>
    ),
  },
  checkbox: {
    component: Checkbox,
    render: (props) => (
      <div className="flex items-center space-x-2">
        <Checkbox id="playground-checkbox" {...props} />
        <Label htmlFor="playground-checkbox">Accept terms and conditions</Label>
      </div>
    ),
  },
  "radio-group": {
    component: RadioGroup,
    render: (props) => (
      <RadioGroup defaultValue="comfortable" {...props}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
      </RadioGroup>
    ),
  },
  select: {
    component: Select,
    render: (props) => (
      <Select {...props}>
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
      </Select>
    ),
  },
  slider: {
    component: Slider,
    render: (props) => {
      const [value, setValue] = useState(props.defaultValue || [50])
      return <Slider {...props} value={value} onValueChange={setValue} className="w-[60%]" />
    },
  },
  switch: {
    component: Switch,
    render: (props) => (
      <div className="flex items-center space-x-2">
        <Switch id="playground-switch" {...props} />
        <Label htmlFor="playground-switch">Toggle Feature</Label>
      </div>
    ),
  },
  tooltip: {
    component: Tooltip,
    render: (props) => (
      <TooltipProvider>
        <Tooltip {...props}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  avatar: {
    component: Avatar,
    render: (props) => (
      <Avatar {...props}>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  badge: { component: Badge },
  progress: { component: Progress },
  calendar: {
    component: Calendar,
    render: (props) => {
      const [date, setDate] = useState<Date | undefined>(new Date())
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="rounded-md border"
          {...props}
        />
      )
    },
  },
  "alert-dialog": {
    component: AlertDialog,
    render: (props) => (
      <AlertDialog {...props}>
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
      </AlertDialog>
    ),
  },
  "hover-card": {
    component: HoverCard,
    render: (props) => (
      <HoverCard {...props}>
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
      </HoverCard>
    ),
  },
  separator: { component: Separator },
}
