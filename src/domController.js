function updateDOM(ident) {
	let rowID = 0
	let columnID = 0
	for (let i = 0; i < 15; i++) {
		rowID = Math.floor(i/3)
		columnID = i%3
		if (ident.booleanMap()[i] === 1) {
			document.getElementById(`${rowID}-${columnID}`).classList.add('fill')
			document.getElementById(`${rowID}-${4-columnID}`).classList.add('fill')
		} else {
			document.getElementById(`${rowID}-${columnID}`).classList.remove('fill')
			document.getElementById(`${rowID}-${4-columnID}`).classList.remove('fill')
		}
	}
}
