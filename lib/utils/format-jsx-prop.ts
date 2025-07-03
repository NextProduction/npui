/**
 * Converts a JavaScript prop value into its string representation suitable for JSX code generation.
 * Handles basic types and provides placeholders for complex ones.
 * @param propName The name of the prop.
 * @param value The JavaScript value of the prop.
 * @param type The declared type of the prop (from PropDetail).
 * @returns A string representation of the prop for JSX.
 */
export function formatJsxProp(propName: string, value: any, type: string): string {
  if (value === undefined || value === null) {
    return "" // Don't render prop if value is undefined or null
  }

  // Handle boolean props (e.g., `checked` instead of `checked={true}`)
  if (type.includes("boolean") && typeof value === "boolean") {
    return value ? propName : `${propName}={false}`
  }

  // Handle string literals (enums) and general strings
  if (type.includes("string") || type.includes('"')) {
    return `${propName}="${value}"`
  }

  // Handle numbers
  if (type.includes("number") && typeof value === "number") {
    return `${propName}={${value}}`
  }

  // Handle arrays (e.g., for Slider defaultValue)
  if (type.includes("[]") && Array.isArray(value)) {
    // Basic serialization for number arrays. For complex arrays, this might need refinement.
    return `${propName}={[${value.join(", ")}]}`
  }

  // Handle objects (e.g., for Calendar range, or complex objects)
  // This is a very basic serialization. For functions or ReactNodes, it will be a placeholder.
  if (type.includes("{") || type.includes("React.ReactNode") || type.includes("=>")) {
    if (propName === "children") {
      return `children={/* Your content here */}`
    }
    return `${propName}={/* ${type} */}`
  }

  // Default fallback for any other unhandled types
  return `${propName}={${JSON.stringify(value)}}`
}
