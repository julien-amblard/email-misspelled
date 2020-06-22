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
	(email: string): ResultInterface[] | ResultInterface | null
}
interface EmailMisspelledConfigInterface {
	(config?: {
		/** Maximum length difference between strings; Default: 2 */
		lengthDiffMax?: number
		/** Number of misspelled error allowed; Default: 2 */
		maxMisspelled?: number
		/** List of email domain to compare */
		domainList?: string[]
		onlyFirst?: boolean
	}): EmailMisspelledInterface
}

export const emailMisspelled: EmailMisspelledConfigInterface = ({
	lengthDiffMax = 2,
	maxMisspelled = 2,
	domainList = popularDomainList,
	onlyFirst = false,
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

	return !!remainsDomains.length ? remainsDomains : null
}
export default emailMisspelled
