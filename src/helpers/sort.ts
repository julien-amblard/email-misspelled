import { Result } from "../interfaces/Result.interface"
interface Sort {
	(a: Result, b: Result): number
}
export const sortByCount: Sort = (a, b) => a.misspelledCount - b.misspelledCount
