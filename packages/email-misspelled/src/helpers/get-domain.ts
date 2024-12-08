export const getDomain = (email: string = ""): string =>
  email.includes("@") ? email.replace(/.*@/, "") : ""
