import { emailChecker } from "../../src"
const checker = emailChecker()

console.log( checker("zefzefzef@outloook.com") )
console.log( checker("zefzefzef@kooltuo.com") )
console.log( checker("zefzefzef@gmial.com") )