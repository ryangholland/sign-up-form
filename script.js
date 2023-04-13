const form = document.querySelector("form");
const password = document.getElementById("password");
const confPassword = document.getElementById("conf-password");

form.addEventListener("submit", (e) => {
  if (password.value != confPassword.value) {
    e.preventDefault();
    password.classList.add("invalid");
    confPassword.classList.add("invalid");
  }
});
