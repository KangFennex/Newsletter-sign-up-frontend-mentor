const subscribeImg = document.getElementById("subscribe-img");
const emailInput = document.getElementById("email-input");
const button = document.getElementById("subscribe-btn");
const error = document.getElementById("error-message");
card = document.querySelector(".card-container");
successCard = document.querySelector(".success-card-container");
let emailSent = document.getElementById("email");
let dismiss = document.getElementById("dismiss-button");
let email;

function updateImg() {
  if (window.innerWidth >= 768) {
    subscribeImg.src = "../assets/images/illustration-sign-up-desktop.svg";
  } else {
    subscribeImg.src = "../assets/images/illustration-sign-up-mobile.svg";
  }
}
emailInput.addEventListener("input", (e) => {
  email = e.target.value;
});

button.addEventListener("click", () => {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (email.match(emailRegex)) {
    card.style.display = "none";
    successCard.style.display = "flex";
    emailSent.innerHTML = email;
  } else {
    error.style.display = "block";
    emailInput.value = "";

    setTimeout(() => {
      error.style.display = "none";
    }, 1500);
  }
});

dismiss.addEventListener("click", () => {
  card.style.display = "grid";
  successCard.style.display = "none";
});

updateImg();
window.addEventListener("resize", updateImg);
