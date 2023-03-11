const container = document.querySelector("ul");
const carouselImages = document.querySelectorAll("ul li");

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let counter = 2;

const size = carouselImages[0].clientWidth;
container.style.transform = `translate(${-size * counter}px)`;

btnNext.addEventListener("click", () => {
  if (counter === 9) {
    container.style.transition = "none";
    counter = 0;
    container.style.transform = `translate(${-size * counter}px)`;
  } else {
    container.style.transition = "transform 0.4s ease-in-out";
    counter++;
    container.style.transform = `translate(${-size * counter}px)`;
  }
});

btnPrev.addEventListener("click", () => {
  if (counter === 0) {
    container.style.transition = "none";
    counter = carouselImages.length - 5;
    container.style.transform = `translate(${-size * counter}px)`;
  } else {
    container.style.transition = "transform 0.4s ease-in-out";
    counter--;
    container.style.transform = `translate(${-size * counter}px)`;
  }
});
