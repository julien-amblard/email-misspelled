interface lettersComparisonInterface {
	(ref: string):boolean	
}
interface lettersComparisonConfigInterface {
	(
		value: string,
		misspelledLength: number
	): lettersComparisonInterface
}

export const lettersComparison:lettersComparisonConfigInterface = ( value = "", misspelledLength = 1 ) => ( ref ) => {

	const valueLetters= value.split("")
	const refLetters= ref.split("")
	const remainsvalueLetters = valueLetters.filter( letter => {
		const refLetterIndex = refLetters.indexOf(letter)
		const haseLetter = refLetterIndex > -1
		if( haseLetter ) refLetters.splice(refLetterIndex, 1)
		return !haseLetter
	})

	return (remainsvalueLetters.length + refLetters.length) <= misspelledLength
}