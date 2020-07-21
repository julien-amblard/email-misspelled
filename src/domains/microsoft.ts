import hotmail from "./hotmail"
import live from "./live"
import outlook from "./outlook"
import { DomainList } from "../types"

export const microsoft: DomainList = [...hotmail, ...live, ...outlook]
