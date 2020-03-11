import { containsOneAt } from "containsOneAt"
import { getDomain } from "getDomain"
import { stringLengthChecker, StringLengthCheckerInterface } from "stringLengthChecker"
import { lettersComparison, LettersComparisonInterface } from "lettersComparison"
import { popularDomainList } from "popularDomainList"

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
	const domain:string = getDomain(email)
	
	if( domainList.includes(domain) ) return
	const sizeFilter:StringLengthCheckerInterface = stringLengthChecker(domain, lengthDiff)
	const letterFilter:LettersComparisonInterface = lettersComparison(domain, misspelled)

	const remainsDomains:string[] = domainList.filter(sizeFilter).filter(letterFilter)

	return remainsDomains[0]
}
