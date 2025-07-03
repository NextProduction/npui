/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 * @param func The function to throttle.
 * @param wait The number of milliseconds to throttle invocations to.
 * @returns The new throttled function.
 */
export function throttle<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  let lastFn: NodeJS.Timeout | null
  let lastTime: number

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    
    if (!inThrottle) {
      func.apply(this, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      if (lastFn) {
        clearTimeout(lastFn)
      }
      lastFn = setTimeout(
        () => {
          if (Date.now() - lastTime >= wait) {
            func.apply(this, args)
            lastTime = Date.now()
          }
        },
        Math.max(wait - (Date.now() - lastTime), 0),
      )
    }
  }
}
