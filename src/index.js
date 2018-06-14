function handleSubmit() {
  let submission = document.getElementById("identicon-submission").value;
  updateDOM(submission);
}

function addFormListener() {
  const form = document.getElementById("identicon-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    handleSubmit();
  });
}

function initialize() {
  addFormListener();
}

document.addEventListener("DOMContentLoaded", initialize);
