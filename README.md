# email-misspelled

[![CircleCI Status](https://circleci.com/gh/Julien-Amblard/email-misspelled.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/Julien-Amblard/email-misspelled)
[![codecov](https://codecov.io/gh/Julien-Amblard/email-misspelled/branch/master/graph/badge.svg)](https://codecov.io/gh/Julien-Amblard/email-misspelled)
[![npm](https://img.shields.io/npm/dt/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/v/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/l/email-misspelled.svg?style=flat-square)](https://github.com/Julien-Amblard/email-misspelled/blob/master/LICENSE)
  
> check possible misspelled in email value and return a matching domain string

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

### Importing <a id="importing"></a>

```js
import emailMisspelled from "email-misspelled"

const emailChecker = emailMisspelled()

emailChecker("user@otmail.com") // hotmail.com

```

---

## Options <a id="options"></a>  

### lengthDiffMax <a id="lengthDiffMax"></a>  

| Type | Default | Description |
|:----|:----|:----|:----|
| `lengthDiffMax` | `2` | max length difference between two string |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ lengthDiffMax: 1 })

emailChecker1("user@otmail.com") // hotmail.com
emailChecker1("user@tmail.com") // undefined

const emailChecker1 = emailMisspelled({ lengthDiffMax: 2 })

emailChecker1("user@otmail.com") // hotmail.com
emailChecker1("user@tmail.com") // hotmail.com
```

---

### maxMisspelled <a id="maxMisspelled"></a>  

| Type | Default | Description |
|:----|:----|:----|:----|
| `maxMisspelled` | `2` | max possible misspelled |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ maxMisspelled: 1 })

emailChecker1("user@hotmial.com") // hotmail.com
emailChecker1("user@hotmia.com") // undefined

const emailChecker1 = emailMisspelled({ maxMisspelled: 2 })

emailChecker1("user@hotmial.com") // hotmail.com
emailChecker1("user@hotmia.com") // hotmail.com
```

---

### domainList <a id="domainList"></a>  

| Type | Default | Description |
|:----|:----|:----|:----|
| `domainList` | [Domain list](#domainListDefault) | max possible misspelled |

```js
import emailMisspelled from "email-misspelled"
const emailChecker1 = emailMisspelled({ domainList: ["random.org"] })

emailChecker1("user@hotmial.com") // undefined
emailChecker1("user@randmo.org") // random.org
```

---

### Default domain list <a id="domainList"></a>  

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
