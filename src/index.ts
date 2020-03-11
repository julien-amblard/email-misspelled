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
		lengthDiffMax?: number
		maxMisspelled?: number
		domainList?: string[]
	}):EmailCheckerInterface
}

export const emailChecker:EmailCheckerConfigInterface = ({ lengthDiffMax = 2, maxMisspelled = 2, domainList = popularDomainList } = {}) => ( email ) => {
	if( !containsOneAt(email) || !!!domainList?.length ) return
	const domain:string = getDomain(email)
	
	if( domainList.includes(domain) ) return
	const sizeFilter:StringLengthCheckerInterface = stringLengthChecker(domain, lengthDiffMax)
	const letterFilter:LettersComparisonInterface = lettersComparison(domain, maxMisspelled)

	const remainsDomains:string[] = domainList.filter(sizeFilter).filter(letterFilter)

	return remainsDomains[0]
}
