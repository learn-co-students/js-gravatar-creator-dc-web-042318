function handleSubmit(e) {
	e.preventDefault()
	const inputTextField = document.querySelector('input[type=text]')
	const ident = new Identicon(inputTextField.value)
	document.documentElement.style.setProperty('--fill-color', ident.color);
	updateDOM(ident);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
