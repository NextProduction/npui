import type React from "react"
// Import props and variants from their new co-located files
import { buttonProps, buttonVariants } from "@/components/npui-components/button/button-data"
import { cardProps, cardVariants } from "@/components/npui-components/card/card-data"
import { alertProps, alertVariants } from "@/components/npui-components/alert/alert-data"
import { inputProps, inputVariants } from "@/components/npui-components/input/input-data"
import { carouselProps, carouselVariants } from "@/components/npui-components/carousel/carousel-data"
import { accordionProps, accordionVariants } from "@/components/npui-components/accordion/accordion-data"
import { tabsProps, tabsVariants } from "@/components/npui-components/tabs/tabs-data"
import { dialogProps, dialogVariants } from "@/components/npui-components/dialog/dialog-data"
import { dropdownMenuProps, dropdownMenuVariants } from "@/components/npui-components/dropdown-menu/dropdown-menu-data"
import { checkboxProps, checkboxVariants } from "@/components/npui-components/checkbox/checkbox-data"
import { radioGroupProps, radioGroupVariants } from "@/components/npui-components/radio-group/radio-group-data"
import { selectProps, selectVariants } from "@/components/npui-components/select/select-data"
import { sliderProps, sliderVariants } from "@/components/npui-components/slider/slider-data"
import { switchProps, switchVariants } from "@/components/npui-components/switch/switch-data"
import { tooltipProps, tooltipVariants } from "@/components/npui-components/tooltip/tooltip-data"
// Existing new component imports
import { avatarProps, avatarVariants } from "@/components/npui-components/avatar/avatar-data"
import { badgeProps, badgeVariants } from "@/components/npui-components/badge/badge-data"
import { progressProps, progressVariants } from "@/components/npui-components/progress/progress-data"
import { toastProps, toastVariants } from "@/components/npui-components/toast/toast-data"
import { calendarProps, calendarVariants } from "@/components/npui-components/calendar/calendar-data"
// NEW COMPONENT IMPORTS
import { alertDialogProps, alertDialogVariants } from "@/components/npui-components/alert-dialog/alert-dialog-data"
import { hoverCardProps, hoverCardVariants } from "@/components/npui-components/hover-card/hover-card-data"
import { separatorProps, separatorVariants } from "@/components/npui-components/separator/separator-data"

export interface PropDetail {
  name: string
  type: string
  description: string
  default?: string
}

export interface ComponentVariant {
  title: string
  description?: string // Optional description for the variant
  code: string
  preview: React.ReactNode
}

export interface NpuiComponent {
  name: string
  slug: string
  description: string
  category: string // New: Category for the component
  props: PropDetail[]
  variants: ComponentVariant[] // Array of variants
  githubUrl?: string // Optional GitHub URL for the component's source
  npmPackageName?: string // Optional npm package name for download badge
}

export interface ComponentCategory {
  id: string
  name: string
  description: string
}

export const npuiCategories: ComponentCategory[] = [
  { id: "general", name: "General Purpose", description: "Commonly used UI elements for various applications." },
  { id: "forms", name: "Form Elements", description: "Interactive components for user input and data submission." },
  { id: "feedback", name: "Feedback & Status", description: "Components to provide user feedback or display status." },
  { id: "layout", name: "Layout & Structure", description: "Components for structuring content and navigation." },
  { id: "overlay", name: "Overlays & Modals", description: "Components that appear on top of content." },
  { id: "navigation", name: "Navigation", description: "Components for navigating through the application." },
  { id: "data-display", name: "Data Display", description: "Components for displaying data in various formats." },
  // Add more categories as needed
]

export const npuiComponents: NpuiComponent[] = [
  {
    name: "Button",
    slug: "button",
    description: "A customizable button component with various styles and sizes.",
    category: "general",
    githubUrl: "http://github.com/NextProduction/npui", // Placeholder
    npmPackageName: "npui-button", // Placeholder
    props: buttonProps, // Use imported props
    variants: buttonVariants, // Use imported variants
  },
  {
    name: "Card",
    slug: "card",
    description: "A flexible card component for grouping related content.",
    category: "general",
    githubUrl: "http://github.com/NextProduction/npui", // Placeholder
    npmPackageName: "npui-card", // Placeholder
    props: cardProps,
    variants: cardVariants,
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Displays a callout for important information.",
    category: "feedback",
    githubUrl: "http://github.com/NextProduction/npui", // Placeholder
    npmPackageName: "npui-alert", // Placeholder
    props: alertProps,
    variants: alertVariants,
  },
  {
    name: "Input",
    slug: "input",
    description: "A flexible and accessible input field.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui", // Placeholder
    npmPackageName: "npui-input", // Placeholder
    props: inputProps,
    variants: inputVariants,
  },
  {
    name: "Carousel",
    slug: "carousel",
    description: "A flexible and accessible carousel component for cycling through elements.",
    category: "layout",
    githubUrl: "http://github.com/NextProduction/npui", // Placeholder
    npmPackageName: "npui-carousel", // Placeholder
    props: carouselProps,
    variants: carouselVariants,
  },
  {
    name: "Accordion",
    slug: "accordion",
    description: "A vertically stacked list of interactive headings that can be toggled to show and hide content.",
    category: "layout",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-accordion",
    props: accordionProps,
    variants: accordionVariants,
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    category: "navigation",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-tabs",
    props: tabsProps,
    variants: tabsVariants,
  },
  {
    name: "Dialog",
    slug: "dialog",
    description: "A modal dialog that interrupts the user's workflow to ask a question or make a decision.",
    category: "overlay",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-dialog",
    props: dialogProps,
    variants: dialogVariants,
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "Displays a menu to the user—such as a list of actions or functions—triggered by a button.",
    category: "navigation",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-dropdown-menu",
    props: dropdownMenuProps,
    variants: dropdownMenuVariants,
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "A control that allows the user to toggle between checked and unchecked states.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-checkbox",
    props: checkboxProps,
    variants: checkboxVariants,
  },
  {
    name: "Radio Group",
    slug: "radio-group",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-radio-group",
    props: radioGroupProps,
    variants: radioGroupVariants,
  },
  {
    name: "Select",
    slug: "select",
    description: "A custom select component for selecting a value from a list of options.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-select",
    props: selectProps,
    variants: selectVariants,
  },
  {
    name: "Slider",
    slug: "slider",
    description: "A control that allows the user to select a value or a range of values along a track.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-slider",
    props: sliderProps,
    variants: sliderVariants,
  },
  {
    name: "Switch",
    slug: "switch",
    description: "A control that allows the user to toggle between checked and unchecked states.",
    category: "forms",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-switch",
    props: switchProps,
    variants: switchVariants,
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description:
      "A pop-up that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    category: "overlay",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-tooltip",
    props: tooltipProps,
    variants: tooltipVariants,
  },
  // --- PREVIOUSLY ADDED COMPONENTS ---
  {
    name: "Avatar",
    slug: "avatar",
    description: "Displays a user profile picture or initials.",
    category: "general",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-avatar",
    props: avatarProps,
    variants: avatarVariants,
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Small count and labeling component.",
    category: "data-display", // Also fits feedback
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-badge",
    props: badgeProps,
    variants: badgeVariants,
  },
  {
    name: "Progress",
    slug: "progress",
    description: "Displays an indicator showing the completion progress of a task.",
    category: "feedback", // Also fits data-display
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-progress",
    props: progressProps,
    variants: progressVariants,
  },
  {
    name: "Toast",
    slug: "toast",
    description: "A brief, temporary message that appears on the screen.",
    category: "feedback", // Also fits overlay
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-toast",
    props: toastProps,
    variants: toastVariants,
  },
  {
    name: "Calendar",
    slug: "calendar",
    description: "A date picker component for selecting single or multiple dates, or a date range.",
    category: "forms", // Also fits data-display
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-calendar",
    props: calendarProps,
    variants: calendarVariants,
  },
  // --- NEW COMPONENTS ADDED BELOW ---
  {
    name: "Alert Dialog",
    slug: "alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    category: "overlay",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-alert-dialog",
    props: alertDialogProps,
    variants: alertDialogVariants,
  },
  {
    name: "Hover Card",
    slug: "hover-card",
    description: "For sighted users to preview content available behind a link.",
    category: "overlay",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-hover-card",
    props: hoverCardProps,
    variants: hoverCardVariants,
  },
  {
    name: "Separator",
    slug: "separator",
    description: "Visually or semantically separates content.",
    category: "layout",
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-separator",
    props: separatorProps,
    variants: separatorVariants,
  },
  // Add more components here to expand the library
]
