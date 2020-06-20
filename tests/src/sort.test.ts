import { sortByCount } from "../../src/helpers/sort"

describe("sort", () => {
	test("should return negative value", () => {
		expect(sortByCount({ misspelledCount: 1, suggest: "" }, { misspelledCount: 2, suggest: "" })).toEqual(-1)
	})
	test("should return positive value", () => {
		expect(sortByCount({ misspelledCount: 2, suggest: "" }, { misspelledCount: 1, suggest: "" })).toEqual(1)
	})
})
