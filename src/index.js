let form = document.getElementById("identicon-form");
// let input = document.getElementsByTagName("input")[0];
let hashedArr;
let color;
let row = 0;
let col = 0;
let square;

function handleSubmit(e) {
  e.preventDefault();
  square = document.querySelectorAll("span");
  square.forEach(span => {
    span.removeAttribute("style");
  });

  let input = document.getElementsByTagName("input")[0];
  let strValue = input.value;
  // input.value = "";
  createArray(strValue);
  createColor(hashedArr);
  assignBlock(row, col, color);
  // setColor(row, col, )
  //console.log("the end");
}

function createArray(strValue) {
  //console.log(strValue);
  hashedArr = md5.array(strValue);
  //console.log(hashedArr);
}

function createColor(array) {
  color = `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
  return color;
  // var final = [];
  //   array = array.filter(function(elem, index, self) {
  //       return index == self.indexOf(elem);
  //   }).sort(function() { return 0.5 - Math.random() });
  //
  //   var len = array.length,
  //   n = n > len ? len : n;
  //
  //   for(var i = 0; i < n; i ++)
  //   {
  //       final[i] = array[i];
  //   }
  //
  //   return final;
}

function setColor(row, col, colorBlock) {
  document.getElementById(`${row}-${col}`).style.backgroundColor = colorBlock;
}

function assignBlock(row, col, color) {
  for (row = 0; row < 5; row++) {
    for (col = 0; col < 3; col++) {
      let number = hashedArr.pop();
      if (number % 2 == 0) {
        setColor(row, col, color);
        if (col == 0 && number % 2 == 0) {
          setColor(row, 4, color);
        }
        if (col == 1 && number % 2 == 0) {
          setColor(row, 3, color);
        }
      }
    }
  }
}

// function finishBlocks(row, col, color) {
//   for (row = 0; row < 2; row++) {
//     for (col = 4; col > 2; col--) {
//       debugger;
//       setColor(row, col, color);
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  // const form = document.getElementById("identicon-form");
  // form.addEventListener("submit", handleSubmit);
  document
    .getElementById("identicon-form")
    .addEventListener("submit", handleSubmit);
});
