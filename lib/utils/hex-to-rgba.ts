/**
 * Converts a hexadecimal color string to an RGBA color string.
 * @param hex The hexadecimal color string (e.g., "#RRGGBB" or "#RGB").
 * @param alpha The alpha transparency value (0-1).
 * @returns The RGBA color string (e.g., "rgba(255, 0, 0, 0.5)").
 */
export function hexToRgba(hex: string, alpha = 1): string | null {
  let r = 0,
    g = 0,
    b = 0
  // Handle #RGB format
  if (hex.length === 4) {
    r = Number.parseInt(hex[1] + hex[1], 16)
    g = Number.parseInt(hex[2] + hex[2], 16)
    b = Number.parseInt(hex[3] + hex[3], 16)
  }
  // Handle #RRGGBB format
  else if (hex.length === 7) {
    r = Number.parseInt(hex.substring(1, 3), 16)
    g = Number.parseInt(hex.substring(3, 5), 16)
    b = Number.parseInt(hex.substring(5, 7), 16)
  } else {
    return null // Invalid hex format
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
