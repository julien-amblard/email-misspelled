import { corrector } from "../src/helpers/corrector.js"

describe("corrector : ", () => {
  it("should return replaced string", () => {
    const obj = corrector("test@test.com")({
      suggest: "zefzef.com",
      corrected: "",
      original: "",
      misspelledCount: 0
    })
    expect(obj.corrected).toEqual("test@zefzef.com")
    expect(obj.suggest).toEqual("zefzef.com")
  })
  it("should return default value", () => {
    const obj = corrector("test@test.com")({
      suggest: "",
      corrected: "",
      original: "",
      misspelledCount: 0
    })
    expect(obj.corrected).toEqual("")
    expect(obj.suggest).toEqual("")
  })
  it("empty string should return default value", () => {
    const obj = corrector("")({
      suggest: "zddzdzd",
      corrected: "",
      original: "",
      misspelledCount: 0
    })
    expect(obj.corrected).toEqual("")
    expect(obj.suggest).toEqual("zddzdzd")
  })
  it("empty suggest should return default value", () => {
    const obj = corrector("")({
      suggest: "",
      corrected: "",
      original: "",
      misspelledCount: 0
    })
    expect(obj.corrected).toEqual("")
    expect(obj.suggest).toEqual("")
  })
})
