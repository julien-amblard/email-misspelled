import { getDomain } from "../src/helpers/get-domain.js"

describe("getDomain : ", () => {
  it("foo@bar.com should return domain", () => {
    expect(getDomain("foo@bar.com")).toEqual("bar.com")
  })
  it("@bar.com should return domain", () => {
    expect(getDomain("@bar.com")).toEqual("bar.com")
  })
  it("foo@ should return nothing", () => {
    expect(getDomain("foo@")).toEqual("")
  })
  it("foo should return nothing", () => {
    expect(getDomain("foo")).toEqual("")
  })
  it("empty string should return nothing", () => {
    expect(getDomain("")).toEqual("")
  })
  it("null should return nothing", () => {
    expect(getDomain()).toEqual("")
  })
})
