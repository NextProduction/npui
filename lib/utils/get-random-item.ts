/**
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
}
