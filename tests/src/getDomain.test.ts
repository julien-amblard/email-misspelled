import { getDomain } from "../../src/helpers/getDomain"

describe("getDomain : ", () => {
	test("foo@bar.com should return domain", () => {
		expect(getDomain("foo@bar.com")).toEqual("bar.com")
	})
	test("@bar.com should return domain", () => {
		expect(getDomain("@bar.com")).toEqual("bar.com")
	})
	test("foo@ should return nothing", () => {
		expect(getDomain("foo@")).toEqual("")
	})
	test("foo should return nothing", () => {
		expect(getDomain("foo")).toEqual("")
	})
	test("empty string should return nothing", () => {
		expect(getDomain("")).toEqual("")
	})
	test("null should return nothing", () => {
		expect(getDomain()).toEqual("")
	})
})
