import hotmailDomains from "./hotmail"
import liveDomains from "./live"
import outlookDomains from "./outlook"

export const microsoftDomains: string[] = [...hotmailDomains, ...liveDomains, ...outlookDomains]
