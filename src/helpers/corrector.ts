import type { Result } from "../typings/index.js"

export interface Corrector {
  (value: Result): Result
}
interface CorrectorConfig {
  (email: string): Corrector
}
export const corrector: CorrectorConfig = (email) => (value) => {
  if (!email || !value.suggest) return value
  return {
    ...value,
    corrected: email.replace(/@.*$/, `@${value.suggest}`),
    original: email
  }
}
