const btnSubmit = document.querySelector(".submit");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const thanksCard = document.getElementById("thanks");
const alertP = document.getElementById("alert");

let clicked = false;
let valueRating = 0;

let buttonsRating = document.querySelectorAll(".btn-rating");

for (let i = 0; i < buttonsRating.length; i++) {
  buttonsRating[i].addEventListener("click", function (e) {
    valueRating = e.target.value;
    console.log(valueRating);
    clicked = true;
    alertP.style.display = "none";
  });
}

function submitRating() {
  if (clicked) {
    console.log("You Submit");
  } else {
    alertP.textContent = "Please choose between 1-5 in the buttons above. ";
    alertP.style.display = "block";
  }
}

btnSubmit.addEventListener("click", submitRating);
