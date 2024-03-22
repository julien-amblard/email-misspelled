import type { DomainList } from "../typings/index.js"
import { aol } from "./aol.js"
import { hotmail } from "./hotmail.js"
import { live } from "./live.js"
import { outlook } from "./outlook.js"
import { more } from "./more.js"
import { top100 } from "./top100.js"
import { yahoo } from "./yahoo.js"

export const all: DomainList = [
  ...new Set([
    ...top100,
    ...aol,
    ...hotmail,
    ...live,
    ...outlook,
    ...more,
    ...yahoo
  ])
]
