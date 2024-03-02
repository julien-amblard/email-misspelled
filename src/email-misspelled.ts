import { containsOneAt } from "./helpers/contains-one-at"
import { getDomain } from "./helpers/get-domain"
import { stringLengthChecker } from "./string-length-checker"
import { lettersComparison } from "./letters-comparison"
import { domainMapper } from "./helpers/domain-mapper"
import { corrector } from "./helpers/corrector"
import { sortByCount } from "./helpers/sort"
import type { EmailMisspelledConstructor, Result } from "./typings"

const DEFAULT_LENGTH = 3
const MAX_MISSPELLED = 2
const DEFAULT_PARAMS = {
  lengthDiffMax: DEFAULT_LENGTH,
  maxMisspelled: MAX_MISSPELLED,
  domains: []
}
const DEFAULT_RETURN: Array<Result> = []

export const emailMisspelled: EmailMisspelledConstructor = ({
  lengthDiffMax = DEFAULT_LENGTH,
  maxMisspelled = MAX_MISSPELLED,
  domains = []
} = DEFAULT_PARAMS) => {
  if (!domains || !Array.isArray(domains) || !domains.length)
    throw new Error(
      "Please provide a domain list (for example: https://github.com/sl-julienamblard/email-misspelled/tree/master/src/domains)"
    )

  return (email) => {
    if (!email || !containsOneAt(email)) return DEFAULT_RETURN

    const domain = getDomain(email)
    if (domains.includes(domain)) return DEFAULT_RETURN

    const sizeFilter = stringLengthChecker(domain, lengthDiffMax)
    const letterFilter = lettersComparison(domain, maxMisspelled)
    const correctorMapper = corrector(email)

    const remainsDomains = domains
      .filter(sizeFilter)
      .map(domainMapper)
      .filter(letterFilter)
      .map(correctorMapper)
      .sort(sortByCount)

    return remainsDomains
  }
}
