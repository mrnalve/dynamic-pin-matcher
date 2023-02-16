// generate pin
function getPinNumber() {
  let pin = Math.round(Math.random() * 10000);
  let pinString = pin + "";
  if (pinString.length === 4) {
    return parseInt(pinString);
  } else {
    getPinNumber();
  }
}

// display pin
document.getElementById("generateBtn").addEventListener("click", () => {
  let displayPinField = document.getElementById("displayPin");
  displayPinField.value = getPinNumber();
});


// calculator button click function
document.getElementById("calculator").addEventListener("click", (event) => {
  let displayCalculateField = document.getElementById("displayCalculateNum");
  let previousFieldNum = displayCalculateField.value;
  let character = event.target.innerText;
  if (isNaN(character) === true) {
    if (character === "C") {
      displayCalculateField.value = "";
    } else if (character === "<") {
      let numbers = displayCalculateField.value.split("");
      numbers.pop();
      displayCalculateField.value = numbers.join("");
    }
  } else {
    displayCalculateField.value = previousFieldNum + character;
  }
});


// submit button click function
document.getElementById("submit").addEventListener("click", () => {
  let displayPinField = document.getElementById("displayPin");
  let displayCalculateField = document.getElementById("displayCalculateNum");
  let rightNotify = document.getElementById('rightPin');
  let wrongNotify = document.getElementById('wrongPin');
  if (parseInt(displayPinField.value) === parseInt(displayCalculateField.value)) {
    rightNotify.style.display = 'block'
    wrongNotify.style.display = 'none'
  } else {
    wrongNotify.style.display = 'block'
    rightNotify.style.display = 'none'
  }
});
