<h2 align="center">email-misspelled</h2>  

<div align="center">  

[![npm](https://img.shields.io/npm/v/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![CircleCI Status](https://img.shields.io/circleci/build/github/julien-amblard/email-misspelled/master?style=flat-square)](https://circleci.com/gh/julien-amblard/email-misspelled)
[![codecov](https://img.shields.io/codecov/c/github/julien-amblard/email-misspelled?logo=codecov&style=flat-square)](https://codecov.io/gh/julien-amblard/email-misspelled)
[![npm](https://img.shields.io/bundlephobia/minzip/email-misspelled?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/dt/email-misspelled.svg?style=flat-square)](https://www.npmjs.com/package/email-misspelled)
[![npm](https://img.shields.io/npm/l/email-misspelled.svg?style=flat-square)](https://github.com/julien-amblard/email-misspelled/blob/v3/LICENSE)

</div>  


Lightweight < 3ko lib

Check the misspelled email's domain and return a list of matching domain suggestions sorted by corrections needed

The string comparison is based on [this algorithm](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)

## [live codepen demo](https://codepen.io/Capse/full/LYGVRoP)

![example](https://raw.githubusercontent.com/julien-amblard/email-misspelled/master/doc/example.gif)

## Table of Contents

1. [Install](#install)
2. [Usages](#usages)
3. [Options](#options)
    - [**domains**](#domains)
    - [**maxMisspelled**](#maxMisspelled)
    - [**lengthDiffMax**](#lengthDiffMax)

<a id="install"></a>

<h2 align="center">Install</h2>

*Install with npm:*

```bash
    npm i email-misspelled
```

*Install with yarn:*

```bash
    yarn add email-misspelled
```

<a id="usages"></a>

<h2 align="center">Usages</h2>


```ts
import emailMisspelled, { top100 } from "email-misspelled"

const emailChecker = emailMisspelled({ domains: top100 })

emailChecker("user@otmail.com")
/**
 * [{ 
 *      suggest: "hotmail.com", 
 *      misspelledCount: 1, 
 *      corrected:"user@hotmail.com", 
 *      original: "user@otmail.com"
 * }]
 **/
```


<br />

<a id="options"></a>

<h2 align="center">Options</h2>

### `domains` <a id="domains"></a>

| Type | Required | Description |
| :--- | :------- | :---------- |
| `string[]` [DomainList](#TDomainList) | true | list of domains to compare |

<br />

```ts
import emailMisspelled from "email-misspelled"
const emailChecker = emailMisspelled({ domains: ["random.org"] })

emailChecker("user@hotmial.com") // []
emailChecker("user@randmo.org")
/**
 * return :
 * [
 *   { 
 *      suggest: "random.org", 
 *      misspelledCount: 1, 
 *      corrected:"user@random.org", 
 *      original: "user@randmo.org"
 *   }
 * ]
 **/
```

<br />

List of domains avaibles :  

- [Top 100 domains list](#top100)
- [Hotmail](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/hotmail.ts)
- [Live](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/live.ts)
- [Outlook](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/outlook.ts)
- [Microsoft (a combination of hotmail, live and outlook emails)](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/microsoft.ts)
- [Yahoo](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/yahoo.ts)
- [Aol](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/aol.ts)
- [Others domains](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/more.ts)
- [All (all previous domains in one list)](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/all.ts)

[More details here](https://github.com/julien-amblard/email-misspelled/blob/master/src/domains/)

**examples**

```ts  
import { top100, hotmail, live } from "email-misspelled"  
```  

Feel free to contribute  

---  

### `maxMisspelled` <a id="maxMisspelled"></a>  

| Type | Required | Default | Description |
| :--- | :------- | :------ | :---------- |
| `number` | false | `2` | max possible misspelled |

<br />

```ts
import emailMisspelled, { top100 } from "email-misspelled"
const emailChecker1 = emailMisspelled({ maxMisspelled: 1, domains: top100 })

emailChecker1("user@hotmial.com")
/**
 * return :
 * [{ 
 *      suggest: "hotmail.com",  
 *      misspelledCount: 1,  
 *      corrected:"user@hotmail.com",  
 *      original: "user@hotmial.com"
 * }]
 **/
emailChecker1("user@hotmia.com") // []

const emailChecker2 = emailMisspelled({ maxMisspelled: 3, domains: top100 })

emailChecker2("user@hotmial.com")
/**
 * return :
 * [{  
 *      suggest: "hotmail.com",  
 *      misspelledCount: 2,  
 *      corrected:"user@hotmail.com",  
 *      original: "user@hotmial.com"  
 * }]
 **/
emailChecker2("user@hotmia.com")
/**
 * return :
 * [{  
 *      suggest: "hotmail.com",  
 *      misspelledCount: 3,  
 *      corrected:"user@hotmail.com",  
 *      original: "user@hotmia.com"  
 * }]
 **/
emailChecker2("user@otmia.com") //4 misspelled, return []
```

---

#### `lengthDiffMax` <a id="lengthDiffMax"></a>

| Type | Required | Default | Description |
| :--- | :------- | :------ | :---------- |
| `number` | false | `3` | max length difference between two string |

<br />

```ts
import emailMisspelled, { top100 } from "email-misspelled"
const emailChecker1 = emailMisspelled({ lengthDiffMax: 1, domains: top100 })

emailChecker1("user@otmail.com")
/**
 * return :
 * [{  
 *      suggest: "hotmail.com",
 *      misspelledCount: 1,
 *      corrected:"user@hotmail.com",
 *      original: "user@otmail.com"
 * }]
 **/
emailChecker1("user@tmail.com") // []

const emailChecker2 = emailMisspelled({ lengthDiffMax: 2, domains: top100 })

emailChecker2("user@otmail.com")
/**
 * return :
 * [{ 
 *      suggest: "hotmail.com",
 *      misspelledCount: 1,
 *      corrected:"user@hotmail.com",
 *      original: "user@otmail.com"
 * }]
 **/
emailChecker2("user@tmail.com")
/**
 * return :
 * [{
 *      suggest: "gmail.com",
 *      misspelledCount: 1,
 *      corrected:"user@gmail.com",
 *      original: "user@tmail.com"
 * },
 * {
 *      suggest: "hotmail.com",
 *      misspelledCount: 2,
 *      corrected:"user@hotmail.com",
 *      original: "user@tmail.com"
 * }]
 **/
```

---


### Top 100 domains list <a id="top100"></a>

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

