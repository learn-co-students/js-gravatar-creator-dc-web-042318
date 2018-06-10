class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(name) {
  	this.name = name
  	this.array = md5.array(name)
  	this.color = `rgb(${this.array[0]}, ${this.array[1]}, ${this.array[2]})`
  }

  booleanMap() {
  	let map = []
  	this.array.forEach(field => map.push(field%2))
  	return map
  }

}
