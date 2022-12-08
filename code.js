const btnSubmit = document.querySelector(".submit");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const thanksCard = document.getElementById("thanks");

let clicked = false;

function submitRating(value) {
  clicked = true;

  if (clicked) {
    console.log("I'm clicked");
  }
}

btnSubmit.addEventListener("click", submitRating);
btn1.addEventListener("click", submitRating(1));
btn2.addEventListener("click", submitRating(2));
btn3.addEventListener("click", submitRating(3));
btn4.addEventListener("click", submitRating(4));
btn5.addEventListener("click", submitRating(5));

let arrRating = [1, 2, 3, 4, 5];

for (let i = 0; i < arrRating.length; i++) {}
