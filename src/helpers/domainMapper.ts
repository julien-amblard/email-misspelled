import { ResultInterface } from "../interfaces/Result.interface"
export interface DomainMapper {
	(suggest: string): ResultInterface
}
export const domainMapper: DomainMapper = suggest => ({ suggest })
