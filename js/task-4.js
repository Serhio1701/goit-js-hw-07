const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  form.reset();
});
const labels = document.querySelectorAll("label");     
labels.forEach(label => {
  label.classList.add("label");
});
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.classList.add("input");
});
const submit = document.querySelector("button");
submit.classList.add("submit");

