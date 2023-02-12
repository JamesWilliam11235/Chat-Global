let usernameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let form = document.getElementById("form");
let closeBtn = document.getElementById("closeBtn");

let profileName = document.getElementById("profile-name");
let profileEmail = document.getElementById("profile-email");
let main = document.getElementById("main");
let submitTex = document.getElementById("submit-text");
let inputText = document.getElementById("input-text");
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail();
  let isFormValid = isUsernameValid && isEmailValid;
  if (isFormValid) {
  }
});
form.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "username":
      checkUsername();
      break;
    case "email":
      checkEmail();
      break;
  }
});

const showError = (input, massage) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("succes");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameEl.value.trim();
  if (!isRequired(username)) {
    showError(usernameEl, "can't be blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      "the name should be more than 3 letters and lower than 20 letters"
    );
  } else {
    showSuccess(usernameEl, "cool keep going");
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (isRequired(email)) {
    showError(emailEl, "can't be blank");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "the email doesn't exist");
  } else {
    showSuccess(emailEl, "cool almost done");
    valid = true;
  }
  return valid;
};
closeBtn.addEventListener("click", () => {
  document.getElementById("form").style.display = "none";
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
form.addEventListener("click", () => {
  profileName.innerText = usernameEl.value;
  profileEmail.innerText = emailEl.value;
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

submitTex.addEventListener("click", () => {
  main.innerHTML += `<div>
  <img src="./images/images.jpg" alt="" />
  <p>${usernameEl.value}</p>
  <h4>${inputText.value}</h4>
</div>`;
});
