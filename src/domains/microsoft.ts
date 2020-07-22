import hotmail from "./hotmail"
import live from "./live"
import outlook from "./outlook"
import { DomainList } from "../typings"

export const microsoft: DomainList = [...hotmail, ...live, ...outlook]
