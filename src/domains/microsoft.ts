import type { DomainList } from "../typings"
import { hotmail } from "./hotmail"
import { live } from "./live"
import { outlook } from "./outlook"

export const microsoft: DomainList = [...hotmail, ...live, ...outlook]
