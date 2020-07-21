export type DomainList = string[]

export type Result = {
	/** Suggested domain */
	suggest: string
	/** Corrected email */
	corrected: string
	/** Number correction needed */
	misspelledCount: number
	/** Original email */
	original: string
}

export interface EmailMisspelled {
	(email: string): Result[]
}

export interface EmailMisspelledConstructor {
	(config: {
		/** Maximum length difference between strings; Default: 2 */
		lengthDiffMax?: number
		/** Number of misspelled error allowed; Default: 2 */
		maxMisspelled?: number
		/** List of email domain to compare */
		domains: DomainList
	}): EmailMisspelled
}
