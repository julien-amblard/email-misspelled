import { Result } from "./types"
export interface LettersComparison {
	(ref: Result): boolean
}
interface LettersComparisonConstructor {
	(value: string, misspelledMax: number): LettersComparison
}
//https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance
export const lettersComparison: LettersComparisonConstructor = (value = "", misspelledMax = 1) => (
	ref = { suggest: "", corrected: "", original: "", misspelledCount: 0 }
) => {
	const distanceMatrix = Array(value.length + 1)
		.fill(null)
		.map(() => Array(ref.suggest.length + 1).fill(null))

	for (let i = 0; i <= ref.suggest.length; i += 1) distanceMatrix[0][i] = i
	for (let j = 0; j <= value.length; j += 1) distanceMatrix[j][0] = j

	for (let j = 1; j <= value.length; j += 1) {
		for (let i = 1; i <= ref.suggest.length; i += 1) {
			const indicator = ref.suggest[i - 1] === value[j - 1] ? 0 : 1
			distanceMatrix[j][i] = Math.min(
				distanceMatrix[j][i - 1] + 1,
				distanceMatrix[j - 1][i] + 1,
				distanceMatrix[j - 1][i - 1] + indicator
			)
		}
	}
	ref.misspelledCount = distanceMatrix[value.length][ref.suggest.length]
	return ref.misspelledCount <= misspelledMax
}
