import "@types/jest"
import { corrector } from "../../src/helpers/corrector"

describe("corrector : ", () => {
	test("should return replaced string", () => {
		const obj = corrector("test@test.com")({ suggest: "zefzef.com" })
		expect(obj.corrected).toEqual("test@zefzef.com")
		expect(obj.suggest).toEqual("zefzef.com")
	})
	test("should return default value", () => {
		const obj = corrector("test@test.com")({ suggest: "" })
		expect(obj.corrected).toEqual(undefined)
		expect(obj.suggest).toEqual("")
	})
	test("should return default value", () => {
		const obj = corrector("")({ suggest: "zddzdzd" })
		expect(obj.corrected).toEqual(undefined)
		expect(obj.suggest).toEqual("zddzdzd")
	})
})
