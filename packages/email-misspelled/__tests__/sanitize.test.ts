import { sanitizeString } from "../src/helpers/sanitize.js"

describe("sanitize ", () => {
  it.each([
    ["test@test.test", "test@test.test"],
    ["test<script>alert(1)</script>@test.test", "test@test.test"],
    [
      "test<scriptalert(1)</script>@test.test",
      "test<scriptalert(1)</script>@test.test"
    ],
    [
      "test<script type='test/javascript'>alert(1)</script>@test.test",
      "test@test.test"
    ]
  ])("sanitizeString(%s) -> %s", (value, expected) => {
    expect(sanitizeString(value)).toEqual(expected)
  })
})
