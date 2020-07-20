import "./core.scss"
import emailMisspelled, { top100, Result } from "../../src"
const checker = emailMisspelled({ domains: top100 })
const interactChecker = emailMisspelled({ domains: top100 })

console.log(checker("zefzefzef@outloook.com"))
console.log(checker("zefzefzef@kooltuo.com"))
console.log(emailMisspelled({ domains: top100, maxMisspelled: 4 })("zefzefzef@hotmial.co"))
console.log(checker("zefzefzef@gmial.com"))

const emailMisspelled1 = emailMisspelled({ domains: top100, maxMisspelled: 1 })

console.log(emailMisspelled1("user@hotmil.com"))

const $input = document.querySelector("input")
const $list = document.querySelector(".corrections")

const onChange = event => {
	const suggestions = interactChecker(event.currentTarget.value)
	clearList()
	if (!!!suggestions?.length) return
	updateList(suggestions)
}

const updateList = (suggestions: Result[]) => {
	suggestions.forEach(({ corrected }) => {
		const $li = getNewLi(corrected)
		$list.appendChild($li)
	})
}

const clearList = () => ($list.innerHTML = "")

const setInputVal = (label: string) => () => {
	$input.value = label
	clearList()
}

const getNewLi = label => {
	const $li = document.createElement("li")
	$li.classList.add("correctionsItem")
	$li.innerHTML = label
	$li.addEventListener("click", setInputVal(label))
	return $li
}

$input.addEventListener("keyup", onChange)
$input.focus()
