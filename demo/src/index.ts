import emailChecker from "../../src"
const checker = emailChecker()

console.log( checker("zefzefzef@outloook.com") )
console.log( checker("zefzefzef@kooltuo.com") )
console.log( emailChecker({maxMisspelled: 4})("zefzefzef@hotmial.co") )
console.log( checker("zefzefzef@gmial.com") )