import { containsOneAt } from "../src/helpers/contains-one-at"

describe("containsOneAt : ", () => {
  test("should return true", () => {
    expect(containsOneAt("zefzef@zefzef.com")).toBe(true)
    expect(containsOneAt("@")).toBe(true)
  })
  test("should return false", () => {
    expect(containsOneAt("zefzef@zefz@ef.com")).toBe(false)
    expect(containsOneAt("zefzefef.com")).toBe(false)
    expect(containsOneAt("")).toBe(false)
    expect(containsOneAt()).toBe(false)
  })
})
