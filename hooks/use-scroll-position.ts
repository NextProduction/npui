"use client"

import { useState } from "react"
import { useEventListener } from "./use-event-listener"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

interface ScrollPosition {
  x: number
  y: number
}

/**
 * A custom hook that tracks the current scroll position of the window.
 *
 * @returns An object containing the scroll position (x and y coordinates).
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY })
  }

  useEventListener("scroll", handleScroll)

  // Set initial scroll position
  useIsomorphicLayoutEffect(() => {
    handleScroll()
  }, [])

  return scrollPosition
}
