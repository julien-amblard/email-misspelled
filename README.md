# email-misspelled
**Lightweight 4ko lib**  

---
[![CircleCI Status](https://circleci.com/gh/Julien-Amblard/email-misspelled.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/Julien-Amblard/email-misspelled)
[![codecov](https://codecov.io/gh/Julien-Amblard/email-misspelled/branch/master/graph/badge.svg)](https://codecov.io/gh/Julien-Amblard/email-misspelled)
[![npm](https://img.shields.io/npm/dt/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/v/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/l/email-misspelled.svg?style=flat-square)](https://github.com/Julien-Amblard/email-misspelled/blob/master/LICENSE)
  
  ---
> Check misspell email's domain and return a list of matching domain suggestions  


String comparison is based on [this](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)

  ---

# [live codepen demo](https://codepen.io/Capse/details/LYGVRoP)
  ---
  
<!-- ## [Live example](https://codepen.io/Capse/pen/gObOKGo) -->

- [Install](#install)
- [Importing](#Importing)
- [Options](#options)
  - [maxMisspelled](#maxMisspelled)
  - [domainList](#domainList)
  - [lengthDiffMax](#lengthDiffMax)

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
| `string[]` | [Domain list](#domainListDefault) | list of checked domains |

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

### Default domain list <a id="domainListDefault"></a>  

- `gmail.com`
- `yahoo.com`
- `hotmail.com`
- `aol.com`
- `hotmail.co.uk`
- `hotmail.fr`
- `msn.com`
- `yahoo.fr`
- `wanadoo.fr`
- `orange.fr`
- `comcast.net`
- `yahoo.co.uk`
- `yahoo.com.br`
- `yahoo.co.in`
- `live.com`
- `rediffmail.com`
- `free.fr`
- `gmx.de`
- `web.de`
- `yandex.ru`
- `ymail.com`
- `libero.it`
- `outlook.com`
- `uol.com.br`
- `bol.com.br`
- `mail.ru`
- `cox.net`
- `hotmail.it`
- `sbcglobal.net`
- `sfr.fr`
- `live.fr`
- `verizon.net`
- `live.co.uk`
- `googlemail.com`
- `yahoo.es`
- `ig.com.br`
- `live.nl`
- `bigpond.com`
- `terra.com.br`
- `yahoo.it`
- `neuf.fr`
- `yahoo.de`
- `alice.it`
- `rocketmail.com`
- `att.net`
- `laposte.net`
- `facebook.com`
- `bellsouth.net`
- `yahoo.in`
- `hotmail.es`
- `charter.net`
- `yahoo.ca`
- `yahoo.com.au`
- `rambler.ru`
- `hotmail.de`
- `tiscali.it`
- `shaw.ca`
- `yahoo.co.jp`
- `sky.com`
- `earthlink.net`
- `optonline.net`
- `freenet.de`
- `t-online.de`
- `aliceadsl.fr`
- `virgilio.it`
- `home.nl`
- `qq.com`
- `telenet.be`
- `me.com`
- `yahoo.com.ar`
- `tiscali.co.uk`
- `yahoo.com.mx`
- `voila.fr`
- `gmx.net`
- `mail.com`
- `planet.nl`
- `tin.it`
- `live.it`
- `ntlworld.com`
- `arcor.de`
- `yahoo.co.id`
- `frontiernet.net`
- `hetnet.nl`
- `live.com.au`
- `yahoo.com.sg`
- `zonnet.nl`
- `club-internet.fr`
- `juno.com`
- `optusnet.com.au`
- `blueyonder.co.uk`
- `bluewin.ch`
- `skynet.be`
- `sympatico.ca`
- `windstream.net`
- `mac.com`
- `centurytel.net`
- `chello.nl`
- `live.ca`
- `aim.com`
- `bigpond.net.au`

---

## TODO  

- [x] Doc
- [x] TU
- [x] TS
- [x] Extend default domain list
