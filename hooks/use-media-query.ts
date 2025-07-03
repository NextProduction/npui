"use client"

import { useState, useEffect } from "react"

/**
 * A custom hook that reactively tracks CSS media queries.
 *
 * @param query The media query string (e.g., "(min-width: 768px)").
 * @returns True if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Set initial state
    setMatches(mediaQueryList.matches)

    // Add event listener for changes
    mediaQueryList.addEventListener("change", listener)

    // Clean up
    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
