import { useEffect, useLayoutEffect } from "react"

/**
 * A custom hook that uses `useLayoutEffect` on the client-side and `useEffect` on the server-side.
 * This prevents warnings when using `useLayoutEffect` in server-side rendering environments.
 */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect
