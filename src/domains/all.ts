import aolDomains from "./aol"
import hotmailDomains from "./hotmail"
import liveDomains from "./live"
import outlookDomains from "./outlook"
import othersDomains from "./others"
import popularDomains from "./popular"
import yahooDomains from "./yahoo"

export const allDomains: string[] = [
	...new Set([
		...aolDomains,
		...hotmailDomains,
		...liveDomains,
		...outlookDomains,
		...othersDomains,
		...popularDomains,
		...yahooDomains,
	]),
]
