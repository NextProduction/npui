/**
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
}
