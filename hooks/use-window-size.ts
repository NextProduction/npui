"use client"

import { useState } from "react"
import { useEventListener } from "./use-event-listener"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

interface WindowSize {
  width: number
  height: number
}

/**
 * A custom hook that tracks the current window dimensions.
 *
 * @returns An object containing the window's width and height.
 */
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

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return windowSize
}
