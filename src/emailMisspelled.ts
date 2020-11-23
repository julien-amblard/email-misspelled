import { containsOneAt } from "helpers/containsOneAt"
import { getDomain } from "helpers/getDomain"
import { stringLengthChecker } from "stringLengthChecker"
import { lettersComparison } from "lettersComparison"
import { domainMapper } from "helpers/domainMapper"
import { corrector } from "helpers/corrector"
import { sortByCount } from "helpers/sort"
import { Result, EmailMisspelledConstructor } from "./typings"

const DEFAULT_LENGTH = 3
const MAX_MISSPELLED = 2

export const emailMisspelled: EmailMisspelledConstructor = (
	{ lengthDiffMax = DEFAULT_LENGTH, maxMisspelled = MAX_MISSPELLED, domains } = {
		lengthDiffMax: DEFAULT_LENGTH,
		maxMisspelled: MAX_MISSPELLED,
		domains: [],
	}
) => {
	if (!!!domains || !Array.isArray(domains) || !!!domains.length)
		throw new Error(
			"Please provide a domain list (https://github.com/sl-julienamblard/email-misspelled/tree/master/src/domains)"
		)

	return email => {
		if (!containsOneAt(email)) return []

		const domain: string = getDomain(email)
		if (domains.includes(domain)) return []

		const sizeFilter = stringLengthChecker(domain, lengthDiffMax)
		const letterFilter = lettersComparison(domain, maxMisspelled)
		const correctorMapper = corrector(email)

		const remainsDomains: Result[] = domains
			.filter(sizeFilter)
			.map(domainMapper)
			.filter(letterFilter)
			.map(correctorMapper)
			.sort(sortByCount)

		return remainsDomains
	}
}
export default emailMisspelled
