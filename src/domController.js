function selectGridElement(row, column) {
  let id = row + "-" + column;
  return document.getElementById(`${id}`);
}

function changeElementColor(element, color) {
  element.style.backgroundColor = color;
}

function transformRow(rowData, color) {
  rowData.forEach(function(blockInfo) {
    let element = selectGridElement(blockInfo.row, blockInfo.column);
    if (blockInfo.on === true) {
      changeElementColor(element, color);
    } else {
      changeElementColor(element, "ffffff");
    }
  });
}

function updateDOM(submission) {
  let identicon = new Identicon(submission);
  for (let i = 0; i < 5; i += 1) {
    let rowData = identicon.rowBuilder(i);
    transformRow(identicon.rowBuilder(i), identicon.rgbcode());
  }
}
