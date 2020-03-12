import { containsOneAt } from "containsOneAt"
import { getDomain } from "getDomain"
import { stringLengthChecker, StringLengthCheckerInterface } from "stringLengthChecker"
import { lettersComparison, LettersComparisonInterface } from "lettersComparison"
import { popularDomainList } from "popularDomainList"
import { domainMapper } from "domainMapper"
import { corrector, Corrector } from "corrector"
import { sortByCount } from "sort"
import { ResultInterface } from "Result.interface"

interface EmailCheckerInterface {
	( email: string ): ResultInterface[]|null
}
interface EmailCheckerConfigInterface {
	(config: {
		/** Max length different between strings; Default: 2 */
		lengthDiffMax?: number
		/** Max misspelled error autorise; Default: 2 */
		maxMisspelled?: number
		/** List of email domain to check */
		domainList?: string[]
	}):EmailCheckerInterface
}

export const emailChecker:EmailCheckerConfigInterface = ({ lengthDiffMax = 2, maxMisspelled = 2, domainList = popularDomainList } = {}) => ( email ) => {
	if( !containsOneAt(email) || !!!domainList?.length ) return
	const domain:string = getDomain(email)
	
	if( domainList.includes(domain) ) return
	const sizeFilter:StringLengthCheckerInterface = stringLengthChecker(domain, lengthDiffMax)
	const letterFilter:LettersComparisonInterface = lettersComparison(domain, maxMisspelled)
	const correctorMapper:Corrector = corrector(email)

	const remainsDomains:ResultInterface[] = domainList
		.filter(sizeFilter)
		.map(domainMapper)
		.filter(letterFilter)
		.map(correctorMapper)
		.sort(sortByCount)

	return !!remainsDomains.length ? remainsDomains : undefined 
}
export default emailChecker
