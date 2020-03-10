
interface StringLengthCheckerInterface {
	( ref: string ):boolean
}
interface StringLengthCheckerConfigInterface {
	(
		domain: string,
		lengthDiff: number
	):StringLengthCheckerInterface
}
export const stringLengthChecker:StringLengthCheckerConfigInterface = ( domain = "", lengthDiff = 1 ) => ref => {
	const diff = domain.length - ref.length
	return diff <= lengthDiff && diff >= -lengthDiff
}