const btnSubmit = document.querySelector(".submit");
const thanksCard = document.getElementById("thanks");
const ratingCard = document.getElementById("card-rating");
const alertP = document.getElementById("alert");
const userRating = document.getElementById("user-value");

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
    ratingCard.style.display = "none";
    thanksCard.style.display = "block";
    userRating.textContent = valueRating;
  } else {
    alertP.textContent = "Please choose between 1-5 in the buttons above. ";
    alertP.style.display = "block";
  }
}

btnSubmit.addEventListener("click", submitRating);
