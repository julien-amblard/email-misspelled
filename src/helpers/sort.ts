interface Sort {
  (a: { misspelledCount: number }, b: { misspelledCount: number }): number
}
export const sortByCount: Sort = (a, b) => a.misspelledCount - b.misspelledCount
