class Identicon {
  constructor(submission) {
    this.submission = submission;
    this.integers = md5.array(submission);
    this.gridArray = this.integers.map(integer => {
      return integer % 2 === 0 ? true : false;
    });
  }

  rgbcode() {
    return `rgb(${this.integers[0]}, ${this.integers[1]}, ${this.integers[2]})`;
  }

  rowBuilder(row) {
    let sIndex = 1 + row * 3;
    return [
      { row: row, column: 0, on: this.gridArray[sIndex] },
      { row: row, column: 1, on: this.gridArray[sIndex + 1] },
      { row: row, column: 2, on: this.gridArray[sIndex + 2] },
      { row: row, column: 3, on: this.gridArray[sIndex + 1] },
      { row: row, column: 4, on: this.gridArray[sIndex] }
    ];
  }
}
