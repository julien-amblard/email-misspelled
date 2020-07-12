import { Result } from "../interfaces/Result.interface"
export interface DomainMapper {
	(suggest: string): Result
}
export const domainMapper: DomainMapper = suggest => ({ suggest })
