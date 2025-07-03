/**
 * Capitalizes the first letter of a string.
 * @param str The input string.
 * @returns The string with its first letter capitalized.
 */
export function capitalize(str: string): string {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}
