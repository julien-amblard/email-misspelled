import { Result } from "../typings"
export interface Corrector {
	(value: Result): Result
}
interface CorrectorConfig {
	(email: string): Corrector
}
export const corrector: CorrectorConfig = email => value => {
	if (!!!email || !!!value?.suggest) return value
	value.corrected = email.replace(/@.*$/, `@${value.suggest}`)
	value.original = email
	return value
}
