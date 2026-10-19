let form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let gender = document.querySelector('input[name="gender"]:checked');
  let message = document.getElementById("message");

  message.style.color = "red";

  if (name.trim() === "") {
    message.textContent = "Please enter your name.";
  } else if (email.trim() === "") {
    message.textContent = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Please enter a valid email.";
  } else if (!/^[0-9]{10}$/.test(phone)) {
    message.textContent = "Enter a valid 10-digit phone number.";
  } else if (dob === "") {
    message.textContent = "Please select your date of birth.";
  } else if (gender === null) {
    message.textContent = "Please select your gender.";
  } else if (password.length < 8) {
    message.textContent = "Password must contain at least 8 characters.";
  } else if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful!";
    form.reset();
  }
});
