import { sortByCount } from "../src/helpers/sort.js"

describe("sort", () => {
  it("should return negative value", () => {
    expect(sortByCount({ misspelledCount: 1 }, { misspelledCount: 2 })).toEqual(
      -1
    )
  })
  it("should return positive value", () => {
    expect(sortByCount({ misspelledCount: 2 }, { misspelledCount: 1 })).toEqual(
      1
    )
  })
})
