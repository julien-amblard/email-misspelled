export interface LettersComparisonInterface {
	(ref: string):boolean	
}
interface LettersComparisonConfigInterface {
	(
		value: string,
		misspelledLength: number
	): LettersComparisonInterface
}

export const lettersComparison:LettersComparisonConfigInterface = ( value = "", misspelledLength = 1 ) => ( ref ) => {

	const valueLetters= value.split("")
	const refLetters= ref.split("")
	const remainsvalueLetters = valueLetters.filter( letter => {
		const refLetterIndex: number = refLetters.indexOf(letter)
		const haseLetter: boolean = refLetterIndex > -1
		if( haseLetter ) refLetters.splice(refLetterIndex, 1)
		return !haseLetter
	})

	return (remainsvalueLetters.length + refLetters.length) <= misspelledLength
}