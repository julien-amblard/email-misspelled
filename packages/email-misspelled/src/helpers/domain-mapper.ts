import type { Result } from "../typings/index.js"

export interface DomainMapper {
  (suggest: string): Result
}
export const domainMapper: DomainMapper = (suggest) => ({
  suggest,
  corrected: "",
  original: "",
  misspelledCount: 0
})
