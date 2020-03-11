
export interface StringLengthCheckerInterface {
	( ref: string ):boolean
}
interface StringLengthCheckerConfigInterface {
	(
		domain: string,
		lengthDiffMax: number
	):StringLengthCheckerInterface
}
export const stringLengthChecker:StringLengthCheckerConfigInterface = ( domain = "", lengthDiffMax = 1 ) => ref => {
	const diff = domain.length - ref.length
	return diff <= lengthDiffMax && diff >= -lengthDiffMax
}