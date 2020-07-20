export interface StringLengthChecker {
	(ref: string): boolean
}
interface StringLengthCheckerConstructor {
	(value: string, lengthDiffMax?: number): StringLengthChecker
}
export const stringLengthChecker: StringLengthCheckerConstructor = (value = "", lengthDiffMax = 1) => ref => {
	const diff = value.length - ref.length
	return diff <= lengthDiffMax && diff >= -lengthDiffMax
}
