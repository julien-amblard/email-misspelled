import aolDomains from "./aol"
import hotmailDomains from "./hotmail"
import liveDomains from "./live"
import outlookDomains from "./outlook"
import moreDomains from "./more"
import popularDomains from "./popular"
import yahooDomains from "./yahoo"

export const allDomains: string[] = [
	...new Set([
		...popularDomains,
		...aolDomains,
		...hotmailDomains,
		...liveDomains,
		...outlookDomains,
		...moreDomains,
		...yahooDomains,
	]),
]
export default allDomains
