"use client"

import type React from "react"

export interface UtilityDetail {
  name: string
  slug: string
  description: string
  code: string
  usageExample?: React.ReactNode // Optional React component for live usage example
}

export const npuiUtilities: UtilityDetail[] = [
  {
    name: "cn (Class Name Utility)",
    slug: "cn",
    description: "A utility function for conditionally joining Tailwind CSS class names together.",
    code: `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
    usageExample:
      `import { cn } from "@/lib/utils" // Assuming cn is in lib/utils.ts

export function CnExample() {
  const isActive = true
  const hasError = false

  return (
    <div className={cn(
      "p-4 border rounded-md",
      isActive && "bg-npui-primary text-npui-primary-foreground",
      hasError ? "border-destructive" : "border-npui-border"
    )}>
      This div uses ` +
      "`cn`" +
      ` for dynamic styling.
    </div>
  )
}`,
  },
  {
    name: "formatDate",
    slug: "format-date",
    description: "Formats a Date object into a human-readable string with customizable options.",
    code: `/**
 * Formats a Date object into a readable string.
 * @param date The Date object to format.
 * @param options Optional Intl.DateTimeFormatOptions for customization.
 * @returns The formatted date string.
 */
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Intl.DateTimeFormat("en-US", options || defaultOptions).format(date)
}`,
    usageExample: `import { formatDate } from "@/lib/utils/format-date" // Assuming path

export function FormatDateExample() {
  const today = new Date()
  const customDate = new Date("2023-01-15T10:30:00Z")

  return (
    <div className="space-y-2">
      <p>Today: {formatDate(today)}</p>
      <p>Custom Date (short): {formatDate(customDate, { year: '2-digit', month: 'short', day: '2-digit' })}</p>
      <p>Custom Date (full): {formatDate(customDate, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  )
}`,
  },
  {
    name: "capitalize",
    slug: "capitalize",
    description: "Capitalizes the first letter of a given string.",
    code: `/**
 * Capitalizes the first letter of a string.
 * @param str The input string.
 * @returns The string with its first letter capitalized.
 */
export function capitalize(str: string): string {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}`,
    usageExample: `import { capitalize } from "@/lib/utils/capitalize" // Assuming path
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function CapitalizeExample() {
  const [text, setText] = useState("hello world")

  return (
    <div className="space-y-4">
      <Label htmlFor="capitalize-input">Enter text</Label>
      <Input
        id="capitalize-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Capitalized: {capitalize(text)}</p>
    </div>
  )
}`,
  },
  {
    name: "truncateString",
    slug: "truncate-string",
    description: "Truncates a string to a specified maximum length, adding an ellipsis if it's cut short.",
    code: `/**
 * Truncates a string to a specified length, adding an ellipsis if truncated.
 * @param str The input string.
 * @param maxLength The maximum length of the string before truncation.
 * @returns The truncated string.
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str
  }
  return str.slice(0, maxLength) + "..."
}`,
    usageExample: `import { truncateString } from "@/lib/utils/truncate-string" // Assuming path

export function TruncateStringExample() {
  const longText = "This is a very long sentence that needs to be truncated for display purposes."
  const shortText = "Short text."

  return (
    <div className="space-y-2">
      <p>Original: {longText}</p>
      <p>Truncated (20 chars): {truncateString(longText, 20)}</p>
      <p>Truncated (50 chars): {truncateString(longText, 50)}</p>
      <p>Short text: {truncateString(shortText, 20)}</p>
    </div>
  )
}`,
  },
  {
    name: "debounce (Function)",
    slug: "debounce-function",
    description: "Creates a debounced version of a function, delaying its execution until a pause in calls.",
    code: `/**
 * Creates a debounced function that delays invoking \`func\` until after \`wait\` milliseconds
 * have passed since the last time the debounced function was invoked.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns The new debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this
    const later = () => {
      timeout = null
      func.apply(context, args)
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}`,
    usageExample: `import { debounce } from "@/lib/utils/debounce" // Assuming path
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useCallback } from "react"

export function DebounceFunctionExample() {
  const [inputValue, setInputValue] = useState("")
  const [displayValue, setDisplayValue] = useState("")

  const debouncedSetDisplayValue = useCallback(
    debounce((text: string) => {
      setDisplayValue(text)
    }, 500),
    [],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    debouncedSetDisplayValue(e.target.value)
  }

  return (
    <div className="space-y-4">
      <Label htmlFor="debounce-func-input">Type something (debounced display)</Label>
      <Input
        id="debounce-func-input"
        placeholder="Start typing..."
        value={inputValue}
        onChange={handleChange}
      />
      <p>Live Input: {inputValue}</p>
      <p>Debounced Display: {displayValue}</p>
    </div>
  )
}`,
  },
  {
    name: "throttle",
    slug: "throttle",
    description:
      "Creates a throttled version of a function, ensuring it's called at most once within a given time frame.",
    code: `/**
 * Creates a throttled function that only invokes \`func\` at most once per \`wait\` milliseconds.
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @returns The new throttled function.
 */
export function throttle<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  let lastFn: NodeJS.Timeout | null
  let lastTime: number

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      if (lastFn) {
        clearTimeout(lastFn)
      }
      lastFn = setTimeout(
        function () {
          if (Date.now() - lastTime >= wait) {
            func.apply(context, args)
            lastTime = Date.now()
          }
        },
        Math.max(wait - (Date.now() - lastTime), 0),
      )
    }
  }
}`,
    usageExample: `import { throttle } from "@/lib/utils/throttle" // Assuming path
import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"

export function ThrottleExample() {
  const [count, setCount] = useState(0)

  const throttledIncrement = useCallback(
    throttle(() => {
      setCount((prev) => prev + 1)
    }, 1000), // Only increment once per second
    [],
  )

  return (
    <div className="space-y-4">
      <p>Count: {count}</p>
      <Button onClick={throttledIncrement}>Rapid Click Me (Throttled)</Button>
      <p className="text-sm text-npui-muted-foreground">
        Clicking rapidly will only increment the count once per second.
      </p>
    </div>
  )
}`,
  },
  {
    name: "isValidEmail",
    slug: "is-valid-email",
    description: "Performs a basic validation check to determine if a string is a valid email address.",
    code: `/**
 * Checks if a string is a valid email address using a simple regex.
 * @param email The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}`,
    usageExample: `import { isValidEmail } from "@/lib/utils/is-valid-email" // Assuming path
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function IsValidEmailExample() {
  const [email, setEmail] = useState("")
  const valid = isValidEmail(email)

  return (
    <div className="space-y-4">
      <Label htmlFor="email-input">Email Address</Label>
      <Input
        id="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="test@example.com"
      />
      {email && (
        <p className={valid ? "text-green-500" : "text-destructive"}>
          {valid ? "Valid Email" : "Invalid Email"}
        </p>
      )}
    </div>
  )
}`,
  },
  {
    name: "generateRandomId",
    slug: "generate-random-id",
    description: "Generates a simple, unique string ID, optionally with a custom prefix.",
    code: `/**
 * Generates a simple unique ID string.
 * @param prefix An optional prefix for the ID.
 * @returns A unique ID string.
 */
export function generateRandomId(prefix: string = "id_"): string {
  return prefix + Math.random().toString(36).substring(2, 9)
}`,
    usageExample: `import { generateRandomId } from "@/lib/utils/generate-random-id" // Assuming path
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function GenerateRandomIdExample() {
  const [id, setId] = useState("")

  return (
    <div className="space-y-4">
      <Button onClick={() => setId(generateRandomId("item-"))}>Generate New ID</Button>
      {id && <p>Generated ID: {id}</p>}
    </div>
  )
}`,
  },
  {
    name: "clamp",
    slug: "clamp",
    description: "Restricts a number to be within a specified minimum and maximum range.",
    code: `/**
 * Clamps a number between an upper and lower bound.
 * @param num The number to clamp.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns The clamped number.
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max)
}`,
    usageExample: `import { clamp } from "@/lib/utils/clamp" // Assuming path
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ClampExample() {
  const [value, setValue] = useState(50)
  const clampedValue = clamp(value, 0, 100)

  return (
    <div className="space-y-4">
      <Label htmlFor="clamp-input">Enter a number (clamped between 0 and 100)</Label>
      <Input
        id="clamp-input"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>Original Value: {value}</p>
      <p>Clamped Value: {clampedValue}</p>
    </div>
  )
}`,
  },
  {
    name: "hexToRgba",
    slug: "hex-to-rgba",
    description: "Converts a hexadecimal color string to an RGBA color string, allowing for transparency.",
    code: `/**
 * Converts a hexadecimal color string to an RGBA color string.
 * @param hex The hexadecimal color string (e.g., "#RRGGBB" or "#RGB").
 * @param alpha The alpha transparency value (0-1).
 * @returns The RGBA color string (e.g., "rgba(255, 0, 0, 0.5)").
 */
export function hexToRgba(hex: string, alpha: number = 1): string | null {
  let r = 0,
    g = 0,
    b = 0
  // Handle #RGB format
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  }
  // Handle #RRGGBB format
  else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16)
    g = parseInt(hex.substring(3, 5), 16)
    b = parseInt(hex.substring(5, 7), 16)
  } else {
    return null // Invalid hex format
  }
  return \`rgba(\${r}, \${g}, \${b}, \${alpha})\`
}`,
    usageExample: `import { hexToRgba } from "@/lib/utils/hex-to-rgba" // Assuming path
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function HexToRgbaExample() {
  const [hex, setHex] = useState("#FF7F00")
  const [alpha, setAlpha] = useState(1)
  const rgba = hexToRgba(hex, alpha)

  return (
    <div className="space-y-4">
      <Label htmlFor="hex-input">Hex Color</Label>
      <Input id="hex-input" value={hex} onChange={(e) => setHex(e.target.value)} />
      <Label htmlFor="alpha-input">Alpha (0-1)</Label>
      <Input
        id="alpha-input"
        type="number"
        step="0.1"
        min="0"
        max="1"
        value={alpha}
        onChange={(e) => setAlpha(Number(e.target.value))}
      />
      <p>RGBA: {rgba || "Invalid Hex"}</p>
      {rgba && (
        <div
          className="w-24 h-24 rounded-md"
          style={{ backgroundColor: rgba }}
        ></div>
      )}
    </div>
  )
}`,
  },
  {
    name: "getRandomItem",
    slug: "get-random-item",
    description: "Selects and returns a random item from an array.",
    code: `/**
 * Returns a random item from an array.
 * @param arr The input array.
 * @returns A random item from the array, or undefined if the array is empty.
 */
export function getRandomItem<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined
  }
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}`,
    usageExample: `import { getRandomItem } from "@/lib/utils/get-random-item" // Assuming path
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function GetRandomItemExample() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
  const [randomFruit, setRandomFruit] = useState<string | undefined>(undefined)

  return (
    <div className="space-y-4">
      <p>Fruits: {items.join(", ")}</p>
      <Button onClick={() => setRandomFruit(getRandomItem(items))}>Pick Random Fruit</Button>
      {randomFruit && <p>Randomly picked: {randomFruit}</p>}
    </div>
  )
}`,
  },
]
