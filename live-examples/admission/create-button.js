// this line is only needed for the interactive editor…
const document = getShadowRoot();

const myButton = document.querySelector("…");

myButton?.addEventListener("click", logButtonClick);

function logButtonClick() {
  console.log("My button was clicked!");
}
