import * as domains from "../src/domains/index.js"

describe("domains : ", () => {
  it("hotmail should be an array of strings", () => {
    expect(Array.isArray(domains.hotmail)).toBe(true)
    expect(typeof domains.hotmail[0]).toEqual("string")
  })
  it("aol should be an array of strings", () => {
    expect(Array.isArray(domains.aol)).toBe(true)
    expect(typeof domains.aol[0]).toEqual("string")
  })
  it("live should be an array of strings", () => {
    expect(Array.isArray(domains.live)).toBe(true)
    expect(typeof domains.live[0]).toEqual("string")
  })
  it("outlook should be an array of strings", () => {
    expect(Array.isArray(domains.outlook)).toBe(true)
    expect(typeof domains.outlook[0]).toEqual("string")
  })
  it("microsoft should be an array of strings", () => {
    expect(Array.isArray(domains.microsoft)).toBe(true)
    expect(typeof domains.microsoft[0]).toEqual("string")
  })
  it("more should be an array of strings", () => {
    expect(Array.isArray(domains.more)).toBe(true)
    expect(typeof domains.more[0]).toEqual("string")
  })
  it("yahoo should be an array of strings", () => {
    expect(Array.isArray(domains.yahoo)).toBe(true)
    expect(typeof domains.yahoo[0]).toEqual("string")
  })
  it("all should be an array of strings", () => {
    expect(Array.isArray(domains.all)).toBe(true)
    expect(typeof domains.all[0]).toEqual("string")
  })
})
