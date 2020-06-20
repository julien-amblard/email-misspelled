export interface StringLengthCheckerInterface {
	(ref: string): boolean
}
interface StringLengthCheckerConfigInterface {
	(value: string, lengthDiffMax?: number): StringLengthCheckerInterface
}
export const stringLengthChecker: StringLengthCheckerConfigInterface = (value = "", lengthDiffMax = 1) => ref => {
	const diff = value.length - ref.length
	return diff <= lengthDiffMax && diff >= -lengthDiffMax
}
