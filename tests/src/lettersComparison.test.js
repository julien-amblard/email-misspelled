import { lettersComparison } from "../../src/lettersComparison"

describe("lettersComparison with 1 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 1)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 1)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 1)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 1)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 1)
		expect(checker({ suggest: "" })).toBe(false)
	})
	test("gmail compare to null should return false", () => {
		const checker = lettersComparison("gmail.com", 1)
		expect(checker()).toBe(false)
	})
})


describe("lettersComparison with 2 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 2)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("gmali.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmali.com", 2)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 2)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 2)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 2)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 2)
		expect(checker({ suggest: "" })).toBe(false)
	})
	test("gmail compare to null should return false", () => {
		const checker = lettersComparison("gmail.com", 2)
		expect(checker()).toBe(false)
	})
})


describe("lettersComparison with 3 max error : ", () => {
	test("gmal.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmal.com", 3)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("gmali.com compare to gmail.com should return true", () => {
		const checker = lettersComparison("gmali.com", 3)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("gmial.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("gmial.com", 3)
		expect(checker({ suggest: "gmail.com" })).toBe(true)
	})
	test("liamg.com compare to gmail.com should return false", () => {
		const checker = lettersComparison("liamg.com", 3)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("nothing compare to gmail.com should return false", () => {
		const checker = lettersComparison("", 3)
		expect(checker({ suggest: "gmail.com" })).toBe(false)
	})
	test("gmail compare to nothing should return false", () => {
		const checker = lettersComparison("gmail.com", 3)
		expect(checker({ suggest: "" })).toBe(false)
	})
	test("gmail compare to null should return false", () => {
		const checker = lettersComparison("gmail.com", 3)
		expect(checker()).toBe(false)
	})
})