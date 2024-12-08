export interface StringLengthChecker {
  (ref: string): boolean
}
export const stringLengthChecker =
  (value: string = "", lengthDiffMax: number = 1): StringLengthChecker =>
  (ref) => {
    const diff = value.length - ref.length
    return diff <= lengthDiffMax && diff >= -lengthDiffMax
  }
