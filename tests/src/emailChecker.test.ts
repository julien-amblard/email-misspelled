import "@types/jest"
import emailChecker from "../../src"

describe("emailChecker default config : ", () => {
	const checker = emailChecker()
	test("nothing should return undefined", () => {
		expect(checker("")).toBe(undefined)
	})
	test("test@nothing.com should return undefined", () => {
		expect(checker("test@nothing.com")).toBe(undefined)
	})
	test("test@gmail.com should return undefined", () => {
		expect(checker("test@gmail.com")).toBe(undefined)
	})
	test("test@gmail.co should return gmail.com", () => {
		expect(checker("test@gmail.co")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmail.co")[0].misspelledCount).toBe(1)
	})
	test("test@gmail.c should return gmail.com", () => {
		expect(checker("test@gmail.c")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmail.c")[0].misspelledCount).toBe(2)
	})
	test("test@gmail. should return undefined", () => {
		expect(checker("test@gmail.")).toBe(undefined)
	})
	test("test@gmal.com should return gmail.com", () => {
		expect(checker("test@gmal.com")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmal.com")[0].misspelledCount).toBe(1)
	})
	test("test@gmial.com should return gmail.com", () => {
		expect(checker("test@gmial.com")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmial.com")[0].misspelledCount).toBe(2)
	})
	test("test@gmiol.com should return gmail.com", () => {
		expect(checker("test@gmiol.com")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmiol.com")[0].misspelledCount).toBe(2)
	})
	test("test@gmiol.co should return undefined", () => {
		expect(checker("test@gmiol.co")).toBe(undefined)
	})
})

describe("emailChecker extend config : ", () => {
	const checker = emailChecker({ lengthDiffMax: 3, maxMisspelled: 3 })
	test("test@nothing.com should return undefined", () => {
		expect(checker("test@nothing.com")).toBe(undefined)
	})
	test("test@outlook.com should return undefined", () => {
		expect(checker("test@outlook.com")).toBe(undefined)
	})
	test("test@outlook.co should return outlook.com", () => {
		expect(checker("test@outlook.co")[0].suggest).toBe("outlook.com")
		expect(checker("test@outlook.co")[0].misspelledCount).toBe(1)
	})
	test("test@outlook.c should return outlook.com", () => {
		expect(checker("test@outlook.c")[0].suggest).toBe("outlook.com")
		expect(checker("test@outlook.c")[0].misspelledCount).toBe(2)
	})
	test("test@outlok. should return outlook.com", () => {
		expect(checker("test@outlok.")).toBe(undefined)
	})
	test("test@outlook. should return outlook.com", () => {
		expect(checker("test@outlook.")[0].suggest).toBe("outlook.com")
		expect(checker("test@outlook.")[0].misspelledCount).toBe(3)
	})
	test("test@outloo.com should return outlook.com", () => {
		expect(checker("test@outloo.com")[0].suggest).toBe("outlook.com")
		expect(checker("test@outloo.com")[0].misspelledCount).toBe(1)
	})
	test("test@oultook.com should return outlook.com", () => {
		expect(checker("test@oultook.com")[0].suggest).toBe("outlook.com")
		expect(checker("test@oultook.com")[0].misspelledCount).toBe(2)
	})
	test("test@ootlook.com should return outlook.com", () => {
		expect(checker("test@ootlook.com")[0].suggest).toBe("outlook.com")
		expect(checker("test@ootlook.com")[0].misspelledCount).toBe(1)
	})
	test("test@ootlook.co should return outlook.com", () => {
		expect(checker("test@ootlook.co")[0].suggest).toBe("outlook.com")
		expect(checker("test@ootlook.co")[0].misspelledCount).toBe(2)
	})
	test("test@ootlok.c should return undefined", () => {
		expect(checker("test@ootlok.c")).toBe(undefined)
	})
})

describe("emailChecker strick config : ", () => {
	const checker = emailChecker({ lengthDiffMax: 1, maxMisspelled: 1 })
	test("test@nothing.com should return undefined", () => {
		expect(checker("test@nothing.com")).toBe(undefined)
	})
	test("test@gmail.com should return undefined", () => {
		expect(checker("test@gmail.com")).toBe(undefined)
	})
	test("test@gmail.co should return gmail.com", () => {
		expect(checker("test@gmail.co")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmail.co")[0].misspelledCount).toBe(1)
	})
	test("test@gmail.c should return undefined", () => {
		expect(checker("test@gmail.c")).toBe(undefined)
	})
	test("test@gmail. should return undefined", () => {
		expect(checker("test@gmail.")).toBe(undefined)
	})
	test("test@gmal.com should return gmail.com", () => {
		expect(checker("test@gmal.com")[0].suggest).toBe("gmail.com")
		expect(checker("test@gmal.com")[0].misspelledCount).toBe(1)
	})
	test("test@gmial.com should return undefined", () => {
		expect(checker("test@gmial.com")).toBe(undefined)
	})
	test("test@gmiol.com should return undefined", () => {
		expect(checker("test@gmiol.com")).toBe(undefined)
	})
	test("test@gmiol.co should return undefined", () => {
		expect(checker("test@gmiol.co")).toBe(undefined)
	})
})
