/**
 * Validate a telephone number, as if written on an input form.
 * Telephone numbers can be written as ten digits, or with dashes,
 * spaces, or dots between the three segments, or with the area code parenthesized;
 * both the area code and any white space between segments are optional.
 */

let sendButton = document.getElementById("send-button");
let input = document.getElementById("tel-number");
let infoPlace = document.getElementById("info-place")
const patternNormal = /^\d{10}$/;
const patternMix = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function validate() {
    console.log(input.value);
  if (input.value.match(patternNormal) || input.value.match(patternMix)) {
    return infoPlace.innerHTML =`<h3 id="good-number">Good phone number</h3>`
  } else {
    console.log("wrong tel number");
    return infoPlace.innerHTML =`<h3>Wrong phone number</h3>`;
  }
}

sendButton.addEventListener("click",validate);
