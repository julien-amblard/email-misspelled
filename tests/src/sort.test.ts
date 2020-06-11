import { sortByCount } from "sort"

describe("sort", () => {
	test("should return negative value", () => {
		expect(sortByCount({ misspelledCount: 1 }, { misspelledCount: 2 })).toEqual(-1)
	})
	test("should return positive value", () => {
		expect(sortByCount({ misspelledCount: 2 }, { misspelledCount: 1 })).toEqual(1)
	})
})