import { stringLengthChecker } from "../src/string-length-checker.js"

describe("stringLengthChecker with diff of 1 : ", () => {
  it("should return a function", () => {
    expect(typeof stringLengthChecker("a", 1)).toBe("function")
    expect(typeof stringLengthChecker("a")).toBe("function")
    expect(typeof stringLengthChecker()).toBe("function")
    expect(typeof stringLengthChecker(null as any, null as any)).toBe(
      "function"
    )
  })
  it("abcd compare efgh to should return true", () => {
    const checker = stringLengthChecker("abcd")
    expect(checker("efgh")).toBe(true)
  })
  it("abcd compare efg to should return true", () => {
    const checker = stringLengthChecker("abcd")
    expect(checker("efg")).toBe(true)
  })
  it("abcd compare ef to should return true", () => {
    const checker = stringLengthChecker("abcd")
    expect(checker("ef")).toBe(false)
  })
  it("abcd compare e to should return true", () => {
    const checker = stringLengthChecker("abcd")
    expect(checker("e")).toBe(false)
  })
  it("abcd compare efghj to should return true", () => {
    const checker = stringLengthChecker("abcd", 1)
    expect(checker("efghj")).toBe(true)
  })
  it("abcd compare efghjk to should return false", () => {
    const checker = stringLengthChecker("abcd", 1)
    expect(checker("efghjk")).toBe(false)
  })
  it("abcd compare efghjkl to should return false", () => {
    const checker = stringLengthChecker("abcd", 1)
    expect(checker("efghjkl")).toBe(false)
  })
  it("nothing compare efghjkl to should return false", () => {
    const checker = stringLengthChecker("")
    expect(checker("efghjkl")).toBe(false)
  })
})

describe("stringLengthChecker with diff of 2 : ", () => {
  const max = 2
  it("abcd compare efgh to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efgh")).toBe(true)
  })
  it("abcd compare efg to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efg")).toBe(true)
  })
  it("abcd compare ef to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("ef")).toBe(true)
  })
  it("abcd compare e to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("e")).toBe(false)
  })
  it("abcd compare efghj to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghj")).toBe(true)
  })
  it("abcd compare efghjk to should return false", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghjk")).toBe(true)
  })
  it("abcd compare efghjkl to should return false", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghjkl")).toBe(false)
  })
})

describe("stringLengthChecker with diff of 3 : ", () => {
  const max = 3
  it("abcd compare efgh to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efgh")).toBe(true)
  })
  it("abcd compare efg to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efg")).toBe(true)
  })
  it("abcd compare ef to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("ef")).toBe(true)
  })
  it("abcd compare e to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("e")).toBe(true)
  })
  it("abcd compare efghj to should return true", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghj")).toBe(true)
  })
  it("abcd compare efghjk to should return false", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghjk")).toBe(true)
  })
  it("abcd compare efghjkl to should return false", () => {
    const checker = stringLengthChecker("abcd", max)
    expect(checker("efghjkl")).toBe(true)
  })
})
