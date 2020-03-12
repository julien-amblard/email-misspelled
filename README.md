# email-misspelled

[![CircleCI Status](https://circleci.com/gh/Julien-Amblard/email-misspelled.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/Julien-Amblard/email-misspelled)
[![codecov](https://codecov.io/gh/Julien-Amblard/email-misspelled/branch/master/graph/badge.svg)](https://codecov.io/gh/Julien-Amblard/email-misspelled)
[![npm](https://img.shields.io/npm/dt/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/v/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/l/email-misspelled.svg?style=flat-square)](https://github.com/Julien-Amblard/email-misspelled/blob/master/LICENSE)
  
> Check misspell email's domain and return a list of matching domain suggestions  

String comparison is based on [this](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)

<!-- ## [Live example](https://codepen.io/Capse/pen/gObOKGo) -->

- [Install](#install)
- [Importing](#Importing)
- [Options](#options)
  - [lengthDiffMax](#lengthDiffMax)
  - [maxMisspelled](#maxMisspelled)
  - [domainList](#domainList)

## Install <a id="install"></a>

`npm i email-misspelled --save`  
or  
`yarn add email-misspelled`  

---

## Importing <a id="importing"></a>

```js
import emailMisspelled from "email-misspelled"

const emailChecker = emailMisspelled()

emailChecker("user@otmail.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/

```

---

## Options <a id="options"></a>  

### lengthDiffMax <a id="lengthDiffMax"></a>  

| Type | Default | Description |
|:----|:----|:----|
| `number` | `2` | max length difference between two string |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ lengthDiffMax: 1 })

emailChecker1("user@otmail.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/
emailChecker1("user@tmail.com") // undefined  

const emailChecker2 = emailMisspelled({ lengthDiffMax: 2 })

emailChecker2("user@otmail.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/
emailChecker2("user@tmail.com")  
/**  
 * return :  
 * [
 *    { suggest: "gmail.com", misspelledCount: 1, corrected:"user@gmail.com"}
 *    { suggest: "hotmail.com", misspelledCount: 2, corrected:"user@hotmail.com"},
 * ]
 **/
```

---

### maxMisspelled <a id="maxMisspelled"></a>  

| Type | Default | Description |
|:----|:----|:----|
| `number` | `2` | max possible misspelled |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ maxMisspelled: 1 })

emailChecker1("user@hotmial.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 2, corrected:"user@hotmail.com"}]
 **/
emailChecker1("user@hotmia.com") // undefined

const emailChecker2 = emailMisspelled({ maxMisspelled: 3 })

emailChecker2("user@hotmial.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 2, corrected:"user@hotmail.com"}]
 **/
emailChecker2("user@hotmia.com")  
/**  
 * return :  
 * [{ suggest: "hotmail.com", misspelledCount: 3, corrected:"user@hotmail.com"}]
 **/
emailChecker2("user@otmia.com") //4 misspelled, return undefined
```

---

### domainList <a id="domainList"></a>  

| Type | Default | Description |
|:----|:----|:----|
| `string[]` | [Domain list](#domainListDefault) | max possible misspelled |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ domainList: ["random.org"] })

emailChecker1("user@hotmial.com") // undefined
emailChecker1("user@randmo.org")  
/**  
 * return :  
 * [{ suggest: "random.org", misspelledCount: 1, corrected:"user@random.org"}]
 **/
```

---

### Default domain list <a id="domainListDefault"></a>  

- `outlook.com`
- `gmail.com`
- `hotmail.com`
- `hotmail.fr`
- `live.fr`
- `live.com`
- `laposte.fr`
- `wanadoo.fr`

---

## TODO  

- [ ] Doc
- [x] TU
- [x] TS
- [x] Extend default domain list
