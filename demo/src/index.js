import { emailChecker } from "../../src"
const checker = emailChecker({
	domainList: ["outlook.com", "mupdoof.com",  "gmail.com"],
	length: 2,
	misspelled: 2
})

console.log( checker("zefzefzef@outloook.com") )
console.log( checker("zefzefzef@gmial.com") )