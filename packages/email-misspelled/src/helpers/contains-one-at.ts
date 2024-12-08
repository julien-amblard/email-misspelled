export const containsOneAt = (email: string = ""): boolean =>
  email.replace(/[^@]/g, "").length === 1
