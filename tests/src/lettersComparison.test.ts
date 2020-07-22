import { lettersComparison } from "../../src/lettersComparison"

describe("lettersComparison config : ", () => {
	test("constructor return a function", () => {
		const checker = lettersComparison("lorem", 1)
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison(null, 1)
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison(null, null)
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison(null)
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison()
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison("", 1)
		expect(typeof checker).toEqual("function")
	})
	test("constructor return a function", () => {
		const checker = lettersComparison("lorem", 1)
		expect(typeof checker).toEqual("function")
	})
})
describe("lettersComparison with 1 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 1)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 1)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 1)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 1)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 1)
		expect(checker({ suggest: "", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
})

describe("lettersComparison with 2 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 2)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("gmali.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmali.com", 2)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 2)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 2)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 2)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 2)
		expect(checker({ suggest: "", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
})

describe("lettersComparison with 3 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 3)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("gmali.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmali.com", 3)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 3)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(true)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 3)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 3)
		expect(checker({ suggest: "gmail.com", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 3)
		expect(checker({ suggest: "", corrected: "", original: "", misspelledCount: 0 })).toBe(false)
	})
})
