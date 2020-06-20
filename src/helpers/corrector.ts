import { ResultInterface } from "interfaces/Result.interface"
export interface Corrector {
	(value: ResultInterface): ResultInterface
}
interface CorrectorConfig {
	(email: string): Corrector
}
export const corrector: CorrectorConfig = email => value => {
	if (!!!email || !!!value?.suggest) return value
	value.corrected = email.replace(/@.*$/, `@${value.suggest}`)
	return value
}
