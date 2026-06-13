function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const pgph = document.querySelectorAll("p");
pgph[1].classList.add("paragraph");
const frameForm = document.createElement("div");
frameForm.classList.add("frame-form");
const widget = document.querySelector(".widget")
widget.append(frameForm);
frameForm.append(pgph[1], button);

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor; 
  colorSpan.textContent = randomColor;        
});
