/**
 * Formats a Date object into a readable string.
 * @param date The Date object to format.
 * @param options Optional Intl.DateTimeFormatOptions for customization.
 * @returns The formatted date string.
 */
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Intl.DateTimeFormat("en-US", options || defaultOptions).format(date)
}
