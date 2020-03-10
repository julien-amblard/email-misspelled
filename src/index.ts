import { containsOneAt } from "./containsOneAt"
import { getDomain } from "./getDomain"
import { stringLengthChecker } from "./stringLengthChecker"
import { lettersComparison } from "./lettersComparison"

interface EmailCheckerInterface {
	(
		email: string
	): string|null
}
interface EmailCheckerConfigInterface {
	(config: {
		length: number
		misspelled: number
		domainList: string[]
	}):EmailCheckerInterface
}

export const emailChecker:EmailCheckerConfigInterface = ({ length, misspelled, domainList }) => ( email ) => {
	if( !containsOneAt(email) ) return
	const domain = getDomain(email)
	
	if( domainList.includes(domain) ) return
	const sizeFilter = stringLengthChecker(domain, length)
	const letterFilter = lettersComparison(domain, misspelled)

	const remainsDomains = domainList.filter(sizeFilter).filter(letterFilter)

	return remainsDomains[0]
}
