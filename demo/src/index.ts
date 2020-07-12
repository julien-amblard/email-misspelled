import "./core.scss"
import emailChecker from "../../src"
const checker = emailChecker()

console.log(checker("zefzefzef@outloook.com"))
console.log(checker("zefzefzef@kooltuo.com"))
console.log(emailChecker({ maxMisspelled: 4 })("zefzefzef@hotmial.co"))
console.log(checker("zefzefzef@gmial.com"))

const $input = document.querySelector("input")
const $list = document.querySelector(".corrections")

const onChange = event => {
	const suggestions = checker(event.currentTarget.value)
	clearList()
	if (!!!suggestions?.length) return
	updateList(suggestions)
}

const updateList = suggestions => {
	suggestions.forEach(({ corrected }) => {
		const $li = getNewLi(corrected)
		console.log(corrected)
		$list.appendChild($li)
	})
}

const clearList = () => ($list.innerHTML = "")

const setInputVal = label => () => {
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
