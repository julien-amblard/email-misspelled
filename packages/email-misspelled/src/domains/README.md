# Domains lists  

The email will be compare to a list of domains.  
You can use one of the domain lists this package or send un custom one.  
It must be an `array` of `string`.  

---

## top100  

```ts
import { top100 } from "email-misspelled"
```

Provided the top 100 most world used email  

---

## hotmail  

```ts
import { hotmail } from "email-misspelled"
```

Provided every domains from `hotmail`  
*example*: `hotmail.com`, `hotmail.fr`...  

---

## live  

```ts
import { live } from "email-misspelled"
```

Provided every domains from `live`  
*example*: `live.com`, `windowslive.com`...  

---

## outlook  

```ts
import { outlook } from "email-misspelled"
```

Provided every domains from `outlook`  

---

## microsoft  

```ts
import { microsoft } from "email-misspelled"
```

Provided a combination of hotmail, live and outlook emails

---

## yahoo  

```ts
import { yahoo } from "email-misspelled"
```

Provided every domains from `yahoo`  

---

## aol  

```ts
import { aol } from "email-misspelled"
```

Provided every domains from `aol`  

---

## more  

```ts
import { more } from "email-misspelled"
```

A list of rare, but still possible emails  
*example*: `aim.com`, `citlink.net` etc  

---

## all  

```ts
import { all } from "email-misspelled"
```

A combinaison of all email listed above  

---

Obviously you can make your own conbinaison of emails  

```ts
import emailMisspelled, { hotmail, yahoo } from "email-misspelled"

const customDomains = [...hotmail, ...yahoo]

const checker = emailMisspelled({ domains: customDomains })
```  
