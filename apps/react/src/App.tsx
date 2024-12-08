import { TextField } from "@radix-ui/themes"
import emailMisspelled, { Result, top100 } from "email-misspelled"
import { ChangeEventHandler, useMemo, useState } from "react"

const useEmailMisspelled = () => {
  const [results, set] = useState<Result[]>([])

  const emailChecker = useMemo(
    () => emailMisspelled({ domains: top100 }),
    [emailMisspelled, top100]
  )
  const checker = (value: string): void => {
    set(emailChecker(value))
  }

  return { emailChecker: checker, results }
}
export const App = () => {
  const { emailChecker, results } = useEmailMisspelled()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    emailChecker(event.target.value)
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <TextField.Root
        size="3"
        placeholder="type an email"
        onChange={handleChange}
      />
      <ul>
        {results.map((result) => (
          <li key={result.corrected}>{result.corrected}</li>
        ))}
      </ul>
    </div>
  )
}
