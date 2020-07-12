import { containsOneAt } from "helpers/containsOneAt"
import { getDomain } from "helpers/getDomain"
import { stringLengthChecker, StringLengthChecker } from "stringLengthChecker"
import { lettersComparison, LettersComparison } from "lettersComparison"
import { popularDomainList } from "domains/popular"
import { domainMapper } from "helpers/domainMapper"
import { corrector, Corrector } from "helpers/corrector"
import { sortByCount } from "helpers/sort"
import { Result } from "interfaces/Result.interface"

interface EmailMisspelled {
	(email: string): Result[] | Result | null
}
interface EmailMisspelledConstructor {
	(config?: {
		/** Maximum length difference between strings; Default: 2 */
		lengthDiffMax?: number
		/** Number of misspelled error allowed; Default: 2 */
		maxMisspelled?: number
		/** List of email domain to compare */
		domainList?: string[]
		onlyFirst?: boolean
	}): EmailMisspelled
}

export const emailMisspelled: EmailMisspelledConstructor = ({
	lengthDiffMax = 2,
	maxMisspelled = 2,
	domainList = popularDomainList,
	onlyFirst = false,
} = {}) => email => {
	if (!containsOneAt(email) || !!!domainList?.length) return
	const domain: string = getDomain(email)

	if (domainList.includes(domain)) return
	const sizeFilter: StringLengthChecker = stringLengthChecker(domain, lengthDiffMax)
	const letterFilter: LettersComparison = lettersComparison(domain, maxMisspelled)
	const correctorMapper: Corrector = corrector(email)

	const remainsDomains: Result[] = domainList
		.filter(sizeFilter)
		.map(domainMapper)
		.filter(letterFilter)
		.map(correctorMapper)
		.sort(sortByCount)

	return !!remainsDomains.length ? remainsDomains : null
}
export default emailMisspelled
