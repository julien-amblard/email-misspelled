<h2 align="center">email-misspelled</h2>

Lightweight < 3ko lib

Check the misspelled email's domain and return a list of matching domain suggestions sorted by corrections needed

The string comparison is based on [this algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)

## [live codepen demo](https://codepen.io/Capse/full/LYGVRoP)

---
<div align="center">

[![npm](https://img.shields.io/npm/v/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![CircleCI Status](https://circleci.com/gh/sl-julienamblard/email-misspelled.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/sl-julienamblard/email-misspelled)
[![codecov](https://codecov.io/gh/sl-julienamblard/email-misspelled/branch/master/graph/badge.svg)](https://codecov.io/gh/sl-julienamblard/email-misspelled)
[![npm](https://img.shields.io/bundlephobia/min/email-misspelled)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/dt/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/l/email-misspelled.svg?style=flat-square)](https://github.com/sl-julienamblard/email-misspelled/blob/master/LICENSE)

</div>

---

## Table of Contents

1. [Install](#install)
2. [Usages](#usages)
3. [Options](#options)
    - [**`domains`**](#domains)
    - [**`maxMisspelled`**](#maxMisspelled)
    - [**`lengthDiffMax`**](#lengthDiffMax)
    - [**`justOne`**](#justOne)

<a id="install"></a>

<h2 align="center">Install</h2>

*Install with npm:*

```bash
    npm i email-misspelled --save
```

*Install with yarn:*

```bash
    yarn add email-misspelled
```

<a id="usages"></a>

<h2 align="center">Usages</h2>


```js
import emailMisspelled, { popularDomains } from "email-misspelled"

const emailChecker = emailMisspelled({ domains: popularDomains })

emailChecker("user@otmail.com")
/**
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/
```

**Returned object model**  

```ts
Result = {
    /** suggested domain */  
    suggest: string  
    /** number correction needed */  
    misspelledCount: number  
    /** corrected email */  
    corrected: string  
    /** original email */  
    original: string  
}[]
```

---

<a id="options"></a>

<h2 align="center">Options</h2>

### `domains` <a id="domains"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `string[]` | true | list of domains to compare |

<br />

```js
import emailMisspelled from "email-misspelled"
const emailChecker = emailMisspelled({ domains: ["random.org"] })

emailChecker("user@hotmial.com") // null
emailChecker("user@randmo.org")
/**
 * return :
 * [{ suggest: "random.org", misspelledCount: 1, corrected:"user@random.org"}]
 **/
```

List of domains avaibles :  

- [Most popular domains list](#domainListDefault)
- [Hotmail](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/hotmail.ts)
- [Live](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/live.ts)
- [Outlook](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/outlook.ts)
- [Microsoft (a combination of hotmail, live and outlook emails](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/microsoft.ts)
- [Yahoo](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/yahoo.ts)
- [Aol](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/aol.ts)
- [Others domains](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/more.ts)
- [All (all previous domains in one list)](https://github.com/sl-julienamblard/email-misspelled/blob/v3/src/domains/all.ts)

Feel free to contribute

---

### `maxMisspelled` <a id="maxMisspelled"></a>

| Type | Required | Default | Description |
| :--- | :------- | :------ | :---------- |
| `number` | true | `2` | max possible misspelled |

<br />

```js
import emailMisspelled, { popularDomains } from "email-misspelled"
const emailChecker1 = emailMisspelled({ maxMisspelled: 1, domains: popularDomains })

emailChecker1("user@hotmial.com")
/**
 * return :
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/
emailChecker1("user@hotmia.com") // null

const emailChecker2 = emailMisspelled({ maxMisspelled: 3, domains: popularDomains })

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

#### `lengthDiffMax` <a id="lengthDiffMax"></a>

| Type | Required | Default | Description |
| :--- | :------- | :------ | :---------- |
| `number` | true | `2` | max length difference between two string |

<br />

```js
import emailMisspelled, { popularDomains } from "email-misspelled"
const emailChecker1 = emailMisspelled({ lengthDiffMax: 1, domains: popularDomains })

emailChecker1("user@otmail.com")
/**
 * return :
 * [{ suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}]
 **/
emailChecker1("user@tmail.com") // null

const emailChecker2 = emailMisspelled({ lengthDiffMax: 2, domains: popularDomains })

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

#### `justOne` <a id="justOne"></a>

| Type | Required | Default | Description |
| :--- | :------- | :------ | :---------- |
| `boolean` | true | `false` | return only the first result |

<br />  

```js
import emailMisspelled, { popularDomains } from "email-misspelled"  
const emailChecker1 = emailMisspelled({  
    justOne: true,  
    domains: popularDomains  
})

emailChecker1("user@otmail.com")
/**
 * return :
 * { suggest: "hotmail.com", misspelledCount: 1, corrected:"user@hotmail.com"}
 **/
```

---

### Popular domains list <a id="popularDomainsList"></a>

ordered by number of existing email

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

- [ ] update demo
- [x] external domain list
- [x] split domain list into smallest part (only hotmail, only gmail etc)
- [x] allow returning only first result
- [x] Doc
- [x] TU
- [x] TS
- [x] Extend default domain list
