import { ResultInterface } from "./Result.interface"
interface SortInterface {
	(
		a:ResultInterface, 
		b:ResultInterface
	): number
}
export const sortByCount:SortInterface = (a, b) => a.misspelledCount - b.misspelledCount