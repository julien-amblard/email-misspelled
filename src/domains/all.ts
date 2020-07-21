import aol from "./aol"
import hotmail from "./hotmail"
import live from "./live"
import outlook from "./outlook"
import more from "./more"
import top100 from "./top100"
import yahoo from "./yahoo"
import { DomainList } from "../typings"

export const all: DomainList = [...new Set([...top100, ...aol, ...hotmail, ...live, ...outlook, ...more, ...yahoo])]
export default all
