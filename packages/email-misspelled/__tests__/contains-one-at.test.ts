import { containsOneAt } from "../src/helpers/contains-one-at.js"

describe("containsOneAt : ", () => {
  it("should return true", () => {
    expect(containsOneAt("zefzef@zefzef.com")).toBe(true)
    expect(containsOneAt("@")).toBe(true)
  })
  it("should return false", () => {
    expect(containsOneAt("zefzef@zefz@ef.com")).toBe(false)
    expect(containsOneAt("zefzefef.com")).toBe(false)
    expect(containsOneAt("")).toBe(false)
    expect(containsOneAt()).toBe(false)
  })
})
