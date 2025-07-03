"use client"

import type React from "react"

export interface HookDetail {
  name: string
  slug: string
  description: string
  code: string
  usageExample?: React.ReactNode // Optional React component for live usage example
}

export const npuiHooks: HookDetail[] = [
  {
    name: "useDebounce",
    slug: "use-debounce",
    description: "Debounces a value, delaying its update until a specified time has passed without further changes.",
    code: `import { useState, useEffect } from "react"

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}`,
    usageExample: `import { useState } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DebounceExample() {
  const [inputValue, setInputValue] = useState("")
  const debouncedSearchTerm = useDebounce(inputValue, 500)

  return (
    <div className="space-y-4">
      <Label htmlFor="search-input">Search (debounced by 500ms)</Label>
      <Input
        id="search-input"
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="text-sm text-npui-muted-foreground">Debounced Value: {debouncedSearchTerm}</p>
    </div>
  )
}`,
  },
  {
    name: "useLocalStorage",
    slug: "use-local-storage",
    description: "Persists and retrieves state from the browser's local storage.",
    code: `import { useState, useEffect } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}`,
    usageExample: `import { useLocalStorage } from "@/hooks/use-local-storage"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LocalStorageExample() {
  const [name, setName] = useLocalStorage("user-name", "Guest")

  return (
    <div className="space-y-4">
      <Label htmlFor="user-name">Your Name (saved in local storage)</Label>
      <Input
        id="user-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p className="text-sm text-npui-muted-foreground">Hello, {name}!</p>
    </div>
  )
}`,
  },
  {
    name: "useOutsideClick",
    slug: "use-outside-click",
    description: "Detects clicks outside of a specified DOM element, useful for closing modals or dropdowns.",
    code: `import { useEffect, RefObject } from "react"

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}`,
    usageExample: `import { useRef, useState } from "react"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function OutsideClickExample() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useOutsideClick(menuRef, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </Button>
      {isOpen && (
        <Card ref={menuRef} className="absolute mt-2 p-4 w-48 bg-npui-card border-npui-border shadow-lg z-10">
          <CardContent className="p-0">
            <ul className="space-y-2">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </CardContent>
        </Card>
      )}
      <p className="mt-2 text-sm text-npui-muted-foreground">Click outside the menu to close it.</p>
    </div>
  )
}`,
  },
  {
    name: "useMediaQuery",
    slug: "use-media-query",
    description: "Reactively tracks the state of a CSS media query.",
    code: `import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    setMatches(mediaQueryList.matches)
    mediaQueryList.addEventListener("change", listener)

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}`,
    usageExample: `import { useMediaQuery } from "@/hooks/use-media-query"
import { Card, CardContent } from "@/components/ui/card"

export function MediaQueryExample() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <p className="text-lg">
          {isDesktop ? "You are on a desktop screen." : "You are on a mobile screen."}
        </p>
        <p className="text-sm text-npui-muted-foreground mt-2">
          (Resize your browser window to see the change)
        </p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "usePrevious",
    slug: "use-previous",
    description: "Stores and returns the previous value of a given state or prop.",
    code: `import { useRef, useEffect } from "react"

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}`,
    usageExample: `import { useState } from "react"
import { usePrevious } from "@/hooks/use-previous"
import { Button } from "@/components/ui/button"

export function PreviousExample() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div className="space-y-4">
      <p className="text-lg">Current Count: {count}</p>
      <p className="text-lg text-npui-muted-foreground">Previous Count: {prevCount ?? 'N/A'}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}`,
  },
  {
    name: "useCopyToClipboard",
    slug: "use-copy-to-clipboard",
    description: "Provides a function to copy text to the clipboard and tracks the copied state.",
    code: `import { useState, useEffect } from "react"

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn("Copy failed", error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}`,
    usageExample: `import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from "react"

export function CopyToClipboardExample() {
  const [textToCopy, setTextToCopy] = useState("Hello npui!")
  const [copiedText, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copy(textToCopy)
    if (success) {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <Label htmlFor="copy-input">Text to Copy</Label>
      <div className="flex gap-2">
        <Input
          id="copy-input"
          value={textToCopy}
          onChange={(e) => setTextToCopy(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleCopy} disabled={isCopied}>
          {isCopied ? <CheckIcon className="h-4 w-4 mr-2" /> : <CopyIcon className="h-4 w-4 mr-2" />}
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
      {copiedText && !isCopied && (
        <p className="text-sm text-npui-muted-foreground">Last copied: "{copiedText}"</p>
      )}
    </div>
  )
}`,
  },
  {
    name: "useEventListener",
    slug: "use-event-listener",
    description: "A declarative way to attach event listeners to the window or a specific DOM element.",
    code: `import { useRef, useEffect } from "react"

type EventListener = <K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window,
) => void

export const useEventListener: EventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event) => savedHandler.current(event as any)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}`,
    usageExample: `import { useState, useRef } from "react"
import { useEventListener } from "@/hooks/use-event-listener"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EventListenerExample() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const boxRef = useRef(null)

  const handleMouseMove = (event: MouseEvent) => {
    setCoords({ x: event.clientX, y: event.clientY })
  }

  // Listen to mousemove on the window
  useEventListener("mousemove", handleMouseMove)

  // Listen to click on a specific element
  const [clickCount, setClickCount] = useState(0)
  const handleClick = () => setClickCount(prev => prev + 1)
  useEventListener("click", handleClick, boxRef.current || undefined)


  return (
    <div className="space-y-4">
      <Card className="p-4">
        <CardContent className="p-0">
          <p>Mouse position (window): X: {coords.x}, Y: {coords.y}</p>
        </CardContent>
      </Card>
      <Card ref={boxRef} className="p-4 cursor-pointer bg-npui-secondary hover:bg-npui-secondary/80">
        <CardContent className="p-0">
          <p>Click me! (Clicks: {clickCount})</p>
        </CardContent>
      </Card>
    </div>
  )
}`,
  },
  {
    name: "useIsomorphicLayoutEffect",
    slug: "use-isomorphic-layout-effect",
    description:
      "A `useLayoutEffect` equivalent that works safely in both client-side and server-side rendering environments.",
    code: `import { useEffect, useLayoutEffect } from "react"

export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect`,
    usageExample:
      `import { useState, useRef } from "react"
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect"
import { Button } from "@/components/ui/button"

export function IsomorphicLayoutEffectExample() {
  const [width, setWidth] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth)
    }
  }, [divRef.current]) // Recalculate if divRef.current changes

  return (
    <div className="space-y-4">
      <div ref={divRef} className="w-full bg-npui-secondary p-4 rounded-md">
        <p>This div's width is: {width}px</p>
      </div>
      <p className="text-sm text-npui-muted-foreground">
        ` +
      "`useIsomorphicLayoutEffect`" +
      ` ensures this calculation runs correctly on both server and client.
      </p>
    </div>
  )
}`,
  },
  {
    name: "useWindowSize",
    slug: "use-window-size",
    description: "Provides the current width and height of the browser window, updating on resize.",
    code: `import { useState } from "react"
import { useEventListener } from "./use-event-listener"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

interface WindowSize {
  width: number
  height: number
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener("resize", handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return windowSize
}`,
    usageExample: `import { useWindowSize } from "@/hooks/use-window-size"
import { Card, CardContent } from "@/components/ui/card"

export function WindowSizeExample() {
  const { width, height } = useWindowSize()

  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <p className="text-lg">Window Width: {width}px</p>
        <p className="text-lg">Window Height: {height}px</p>
        <p className="text-sm text-npui-muted-foreground mt-2">
          (Resize your browser window to see the change)
        </p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "useScrollPosition",
    slug: "use-scroll-position",
    description: "Tracks the current scroll position (X and Y coordinates) of the window.",
    code: `import { useState } from "react"
import { useEventListener } from "./use-event-listener"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

interface ScrollPosition {
  x: number
  y: number
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY })
  }

  useEventListener("scroll", handleScroll)

  useIsomorphicLayoutEffect(() => {
    handleScroll()
  }, [])

  return scrollPosition
}`,
    usageExample: `import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Card, CardContent } from "@/components/ui/card"

export function ScrollPositionExample() {
  const { x, y } = useScrollPosition()

  return (
    <div className="space-y-4">
      <Card className="p-4 sticky top-20 z-20 bg-npui-card border-npui-border">
        <CardContent className="p-0">
          <p className="text-lg">Scroll X: {x}px</p>
          <p className="text-lg">Scroll Y: {y}px</p>
        </CardContent>
      </Card>
      <div className="h-[1000px] bg-npui-secondary/20 flex items-center justify-center">
        <p className="text-npui-muted-foreground">Scroll down to see the Y position change.</p>
      </div>
      <div className="h-[1000px] bg-npui-secondary/40 flex items-center justify-center">
        <p className="text-npui-muted-foreground">Keep scrolling!</p>
      </div>
    </div>
  )
}`,
  },
]
