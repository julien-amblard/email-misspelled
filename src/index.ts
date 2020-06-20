import { containsOneAt } from "helpers/containsOneAt"
import { getDomain } from "helpers/getDomain"
import { stringLengthChecker, StringLengthCheckerInterface } from "stringLengthChecker"
import { lettersComparison, LettersComparisonInterface } from "lettersComparison"
import { popularDomainList } from "data/popularDomainList"
import { domainMapper } from "helpers/domainMapper"
import { corrector, Corrector } from "helpers/corrector"
import { sortByCount } from "helpers/sort"
import { ResultInterface } from "interfaces/Result.interface"

interface EmailMisspelledInterface {
	(email: string): ResultInterface[] | undefined
}
interface EmailMisspelledConfigInterface {
	(config?: {
		/** Max length different between strings; Default: 2 */
		lengthDiffMax?: number
		/** Max misspelled allowed; Default: 2 */
		maxMisspelled?: number
		/** List of email domain to compare */
		domainList?: string[]
	}): EmailMisspelledInterface
}

export const emailMisspelled: EmailMisspelledConfigInterface = ({
	lengthDiffMax = 2,
	maxMisspelled = 2,
	domainList = popularDomainList,
} = {}) => email => {
	if (!containsOneAt(email) || !!!domainList?.length) return
	const domain: string = getDomain(email)

	if (domainList.includes(domain)) return
	const sizeFilter: StringLengthCheckerInterface = stringLengthChecker(domain, lengthDiffMax)
	const letterFilter: LettersComparisonInterface = lettersComparison(domain, maxMisspelled)
	const correctorMapper: Corrector = corrector(email)

	const remainsDomains: ResultInterface[] = domainList
		.filter(sizeFilter)
		.map(domainMapper)
		.filter(letterFilter)
		.map(correctorMapper)
		.sort(sortByCount)

	return !!remainsDomains.length ? remainsDomains : undefined
}
export default emailMisspelled
