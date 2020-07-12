import "@types/jest"
import { containsOneAt } from "../../src/helpers/containsOneAt"

describe("containsOneAt : ", () => {
	test("should return true", () => {
		expect(containsOneAt("zefzef@zefzef.com")).toBe(true)
	})
	test("should return true", () => {
		expect(containsOneAt("@")).toBe(true)
	})
	test("should return false", () => {
		expect(containsOneAt("zefzef@zefz@ef.com")).toBe(false)
	})
	test("should return false", () => {
		expect(containsOneAt("zefzefef.com")).toBe(false)
	})
})
