/**
 * Checks if a string is a valid email address using a simple regex.
 * @param email The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  // A simple regex for email validation. For more robust validation, consider a library.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
