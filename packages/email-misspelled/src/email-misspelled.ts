import { containsOneAt } from "./helpers/contains-one-at.js"
import { getDomain } from "./helpers/get-domain.js"
import { stringLengthChecker } from "./string-length-checker.js"
import { lettersComparison } from "./letters-comparison.js"
import { domainMapper } from "./helpers/domain-mapper.js"
import { corrector } from "./helpers/corrector.js"
import { sortByCount } from "./helpers/sort.js"
import { sanitizeString } from "./helpers/sanitize.js"
import type { EmailMisspelledConstructor, Result } from "./typings/index.js"

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
      "Please provide a domain list (for example: https://github.com/julien-amblard/email-misspelled/tree/main/src/domains)"
    )

  return (email) => {
    const sanitizedEmail = sanitizeString(email)
    if (!sanitizedEmail || !containsOneAt(sanitizedEmail)) return DEFAULT_RETURN

    const domain = getDomain(sanitizedEmail)
    if (domains.includes(domain)) return DEFAULT_RETURN

    const sizeFilter = stringLengthChecker(domain, lengthDiffMax)
    const letterFilter = lettersComparison(domain, maxMisspelled)
    const correctorMapper = corrector(sanitizedEmail)

    const remainsDomains = domains
      .filter(sizeFilter)
      .map(domainMapper)
      .filter(letterFilter)
      .map(correctorMapper)
      .sort(sortByCount)

    return remainsDomains
  }
}
