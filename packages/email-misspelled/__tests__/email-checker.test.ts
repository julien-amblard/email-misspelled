import emailChecker, { top100 } from "../src/index.js"

describe("emailChecker default config : ", () => {
  const checker = emailChecker({ domains: top100 })
  it("should throw an error", () => {
    expect(emailChecker).toThrowError("Please provide a domain list")
    expect(() => emailChecker({ domains: [] })).toThrowError(
      "Please provide a domain list"
    )
  })
  it("nothing should return []", () => {
    expect(checker("")).toEqual([])
  })
  it("test@nothing.com should return []", () => {
    expect(checker("test@nothing.com")).toEqual([])
  })
  it("test@gmail.com should return []", () => {
    expect(checker("test@gmail.com")).toEqual([])
  })
  it("test@gmail.co should return gmail.com", () => {
    expect(checker("test@gmail.co")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmail.co")[0].misspelledCount).toEqual(1)
  })
  it("test@gmail.c should return gmail.com", () => {
    expect(checker("test@gmail.c")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmail.c")[0].misspelledCount).toEqual(2)
  })
  it("test@gmail. should return []", () => {
    expect(checker("test@gmail.")).toEqual([])
  })
  it("test@gmal.com should return gmail.com", () => {
    expect(checker("test@gmal.com")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmal.com")[0].misspelledCount).toEqual(1)
  })
  it("test@gmial.com should return gmail.com", () => {
    expect(checker("test@gmial.com")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmial.com")[0].misspelledCount).toEqual(2)
  })
  it("test@gmiol.com should return gmail.com", () => {
    expect(checker("test@gmiol.com")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmiol.com")[0].misspelledCount).toEqual(2)
  })
  it("test@gmiol.co should return []", () => {
    expect(checker("test@gmiol.co")).toEqual([])
  })
})

describe("emailChecker extend config : ", () => {
  const checker = emailChecker({
    domains: top100,
    lengthDiffMax: 3,
    maxMisspelled: 3
  })
  it("test@nothing.com should return []", () => {
    expect(checker("test@nothing.com")).toEqual([])
  })
  it("test@outlook.com should return []", () => {
    expect(checker("test@outlook.com")).toEqual([])
  })
  it("test@outlook.co should return outlook.com", () => {
    expect(checker("test@outlook.co")[0].suggest).toEqual("outlook.com")
    expect(checker("test@outlook.co")[0].misspelledCount).toEqual(1)
  })
  it("test@outlook.c should return outlook.com", () => {
    expect(checker("test@outlook.c")[0].suggest).toEqual("outlook.com")
    expect(checker("test@outlook.c")[0].misspelledCount).toEqual(2)
  })
  it("test@outlok. should return outlook.com", () => {
    expect(checker("test@outlok.")).toEqual([])
  })
  it("test@outlook. should return outlook.com", () => {
    expect(checker("test@outlook.")[0].suggest).toEqual("outlook.com")
    expect(checker("test@outlook.")[0].misspelledCount).toEqual(3)
  })
  it("test@outloo.com should return outlook.com", () => {
    expect(checker("test@outloo.com")[0].suggest).toEqual("outlook.com")
    expect(checker("test@outloo.com")[0].misspelledCount).toEqual(1)
  })
  it("test@oultook.com should return outlook.com", () => {
    expect(checker("test@oultook.com")[0].suggest).toEqual("outlook.com")
    expect(checker("test@oultook.com")[0].misspelledCount).toEqual(2)
  })
  it("test@ootlook.com should return outlook.com", () => {
    expect(checker("test@ootlook.com")[0].suggest).toEqual("outlook.com")
    expect(checker("test@ootlook.com")[0].misspelledCount).toEqual(1)
  })
  it("test@ootlook.co should return outlook.com", () => {
    expect(checker("test@ootlook.co")[0].suggest).toEqual("outlook.com")
    expect(checker("test@ootlook.co")[0].misspelledCount).toEqual(2)
  })
  it("test@ootlok.c should return []", () => {
    expect(checker("test@ootlok.c")).toEqual([])
  })
})

describe("emailChecker strick config : ", () => {
  const checker = emailChecker({
    domains: top100,
    lengthDiffMax: 1,
    maxMisspelled: 1
  })
  it("test@nothing.com should return []", () => {
    expect(checker("test@nothing.com")).toEqual([])
  })
  it("test@gmail.com should return []", () => {
    expect(checker("test@gmail.com")).toEqual([])
  })
  it("test@gmail.co should return gmail.com", () => {
    expect(checker("test@gmail.co")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmail.co")[0].misspelledCount).toEqual(1)
  })
  it("test@gmail.c should return []", () => {
    expect(checker("test@gmail.c")).toEqual([])
  })
  it("test@gmail. should return []", () => {
    expect(checker("test@gmail.")).toEqual([])
  })
  it("test@gmal.com should return gmail.com", () => {
    expect(checker("test@gmal.com")[0].suggest).toEqual("gmail.com")
    expect(checker("test@gmal.com")[0].misspelledCount).toEqual(1)
  })
  it("test@gmial.com should return []", () => {
    expect(checker("test@gmial.com")).toEqual([])
  })
  it("test@gmiol.com should return []", () => {
    expect(checker("test@gmiol.com")).toEqual([])
  })
  it("test@gmiol.co should return []", () => {
    expect(checker("test@gmiol.co")).toEqual([])
  })
})
