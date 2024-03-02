/* eslint import/no-default-export: 0 */
import { emailMisspelled } from "./email-misspelled"

export * from "./domains"

export type {
  DomainList,
  Result,
  EmailMisspelled,
  EmailMisspelledConfig,
  EmailMisspelledConstructor
} from "./typings"

export default emailMisspelled
