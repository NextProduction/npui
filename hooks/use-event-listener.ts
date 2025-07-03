"use client"

import { useRef, useEffect } from "react"

type EventListener = <K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window,
) => void

/**
 * A custom hook for attaching event listeners.
 *
 * @param eventName The name of the event to listen for.
 * @param handler The event handler function.
 * @param element The DOM element or Window object to attach the listener to (defaults to Window).
 */
export const useEventListener: EventListener = (eventName, handler, element = window) => {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us having to pass it in a dependency array ...
  // ... and causing effect to re-run.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => savedHandler.current(event as any)

    // Add event listener
    element.addEventListener(eventName, eventListener)

    // Remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element]) // Re-run if eventName or element changes
}
