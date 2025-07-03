/**
 * Generates a simple unique ID string.
 * @param prefix An optional prefix for the ID.
 * @returns A unique ID string.
 */
export function generateRandomId(prefix = "id_"): string {
  return prefix + Math.random().toString(36).substring(2, 9)
}
