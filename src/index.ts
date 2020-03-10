import { containsOneAt } from "containsOneAt"
import { getDomain } from "getDomain"
import { stringLengthChecker } from "stringLengthChecker"
import { lettersComparison } from "lettersComparison"
import { popularDomainList } from "populardomainList"

interface EmailCheckerInterface {
	(
		email: string
	): string|null
}
interface EmailCheckerConfigInterface {
	(config: {
		lengthDiff?: number
		misspelled?: number
		domainList?: string[]
	}):EmailCheckerInterface
}

export const emailChecker:EmailCheckerConfigInterface = ({ lengthDiff = 2, misspelled = 2, domainList = popularDomainList } = {}) => ( email ) => {
	if( !containsOneAt(email) || !!!domainList?.length ) return
	const domain = getDomain(email)
	
	if( domainList.includes(domain) ) return
	const sizeFilter = stringLengthChecker(domain, lengthDiff)
	const letterFilter = lettersComparison(domain, misspelled)

	const remainsDomains = domainList.filter(sizeFilter).filter(letterFilter)

	return remainsDomains[0]
}
