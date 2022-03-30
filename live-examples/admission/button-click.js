// this line is only needed for the interactive editor…
const document = getShadowRoot();

const button1 = document.querySelector(".button-01");
// Something is not right in the next line:
const button2 = document.querySelector("button-02");

button1.addEventListener("click", logButton1Click);

// TODO: Add another click event listener for button-02

function logButton1Click() {
  console.log("Button 1 was clicked!");
}
