document.addEventListener("DOMContentLoaded", function () {

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

card.addEventListener("mouseenter", () => {
card.style.boxShadow = "0 0 20px #00c3ff";
});

card.addEventListener("mouseleave", () => {
card.style.boxShadow = "none";
});

});

const btn = document.querySelector(".btn");

if (btn) {
btn.addEventListener("click", function () {
alert("Welcome to S-Fiber Internet Service & IT Academy!");
});
}

});
