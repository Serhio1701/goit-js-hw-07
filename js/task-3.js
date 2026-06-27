const input = document.querySelector("#name-input");
input.classList.add("frame-input");
const output = document.querySelector("#name-output");
output.classList.add("hello");
input.addEventListener("input", () => {
  const trimmedValue = input.value.trim();

  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
const title = document.querySelector("h1");
title.classList.add("title-h1");
const container = document.createElement("div");
container.classList.add("frame");
input.before(container);
container.append(input, title);
const placeholder = document.querySelector();