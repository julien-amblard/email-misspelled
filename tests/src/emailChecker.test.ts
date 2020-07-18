import emailChecker from "../../src"
import { top100 } from "../../src"

describe("emailChecker default config : ", () => {
	const checker = emailChecker({ domains: top100 })
	test("nothing should return []", () => {
		expect(checker("")).toEqual([])
	})
	test("test@nothing.com should return []", () => {
		expect(checker("test@nothing.com")).toEqual([])
	})
	test("test@gmail.com should return []", () => {
		expect(checker("test@gmail.com")).toEqual([])
	})
	test("test@gmail.co should return gmail.com", () => {
		expect(checker("test@gmail.co")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmail.co")[0].misspelledCount).toEqual(1)
	})
	test("test@gmail.c should return gmail.com", () => {
		expect(checker("test@gmail.c")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmail.c")[0].misspelledCount).toEqual(2)
	})
	test("test@gmail. should return []", () => {
		expect(checker("test@gmail.")).toEqual([])
	})
	test("test@gmal.com should return gmail.com", () => {
		expect(checker("test@gmal.com")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmal.com")[0].misspelledCount).toEqual(1)
	})
	test("test@gmial.com should return gmail.com", () => {
		expect(checker("test@gmial.com")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmial.com")[0].misspelledCount).toEqual(2)
	})
	test("test@gmiol.com should return gmail.com", () => {
		expect(checker("test@gmiol.com")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmiol.com")[0].misspelledCount).toEqual(2)
	})
	test("test@gmiol.co should return []", () => {
		expect(checker("test@gmiol.co")).toEqual([])
	})
})

describe("emailChecker extend config : ", () => {
	const checker = emailChecker({ domains: top100, lengthDiffMax: 3, maxMisspelled: 3 })
	test("test@nothing.com should return []", () => {
		expect(checker("test@nothing.com")).toEqual([])
	})
	test("test@outlook.com should return []", () => {
		expect(checker("test@outlook.com")).toEqual([])
	})
	test("test@outlook.co should return outlook.com", () => {
		expect(checker("test@outlook.co")[0].suggest).toEqual("outlook.com")
		expect(checker("test@outlook.co")[0].misspelledCount).toEqual(1)
	})
	test("test@outlook.c should return outlook.com", () => {
		expect(checker("test@outlook.c")[0].suggest).toEqual("outlook.com")
		expect(checker("test@outlook.c")[0].misspelledCount).toEqual(2)
	})
	test("test@outlok. should return outlook.com", () => {
		expect(checker("test@outlok.")).toEqual([])
	})
	test("test@outlook. should return outlook.com", () => {
		expect(checker("test@outlook.")[0].suggest).toEqual("outlook.com")
		expect(checker("test@outlook.")[0].misspelledCount).toEqual(3)
	})
	test("test@outloo.com should return outlook.com", () => {
		expect(checker("test@outloo.com")[0].suggest).toEqual("outlook.com")
		expect(checker("test@outloo.com")[0].misspelledCount).toEqual(1)
	})
	test("test@oultook.com should return outlook.com", () => {
		expect(checker("test@oultook.com")[0].suggest).toEqual("outlook.com")
		expect(checker("test@oultook.com")[0].misspelledCount).toEqual(2)
	})
	test("test@ootlook.com should return outlook.com", () => {
		expect(checker("test@ootlook.com")[0].suggest).toEqual("outlook.com")
		expect(checker("test@ootlook.com")[0].misspelledCount).toEqual(1)
	})
	test("test@ootlook.co should return outlook.com", () => {
		expect(checker("test@ootlook.co")[0].suggest).toEqual("outlook.com")
		expect(checker("test@ootlook.co")[0].misspelledCount).toEqual(2)
	})
	test("test@ootlok.c should return []", () => {
		expect(checker("test@ootlok.c")).toEqual([])
	})
})

describe("emailChecker strick config : ", () => {
	const checker = emailChecker({ domains: top100, lengthDiffMax: 1, maxMisspelled: 1 })
	test("test@nothing.com should return []", () => {
		expect(checker("test@nothing.com")).toEqual([])
	})
	test("test@gmail.com should return []", () => {
		expect(checker("test@gmail.com")).toEqual([])
	})
	test("test@gmail.co should return gmail.com", () => {
		expect(checker("test@gmail.co")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmail.co")[0].misspelledCount).toEqual(1)
	})
	test("test@gmail.c should return []", () => {
		expect(checker("test@gmail.c")).toEqual([])
	})
	test("test@gmail. should return []", () => {
		expect(checker("test@gmail.")).toEqual([])
	})
	test("test@gmal.com should return gmail.com", () => {
		expect(checker("test@gmal.com")[0].suggest).toEqual("gmail.com")
		expect(checker("test@gmal.com")[0].misspelledCount).toEqual(1)
	})
	test("test@gmial.com should return []", () => {
		expect(checker("test@gmial.com")).toEqual([])
	})
	test("test@gmiol.com should return []", () => {
		expect(checker("test@gmiol.com")).toEqual([])
	})
	test("test@gmiol.co should return []", () => {
		expect(checker("test@gmiol.co")).toEqual([])
	})
})
