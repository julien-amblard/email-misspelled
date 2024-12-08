import type { DomainList } from "../typings/index.js"
import { hotmail } from "./hotmail.js"
import { live } from "./live.js"
import { outlook } from "./outlook.js"

export const microsoft: DomainList = [...hotmail, ...live, ...outlook]
