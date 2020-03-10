
interface StringLengthCheckerInterface {
	( ref: string ):boolean
}
interface StringLengthCheckerConfigInterface {
	(
		domain: string,
		errorMargin: number
	):StringLengthCheckerInterface
}
export const stringLengthChecker:StringLengthCheckerConfigInterface = ( domain = "", errorMargin = 1 ) => ref => {
	const diff = domain.length - ref.length
	return diff <= errorMargin && diff >= -errorMargin
}