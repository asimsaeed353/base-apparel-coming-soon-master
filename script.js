const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");

form.addEventListener("input", function (event) {
  // const errorMessage = document.getElementsByClassName('error-message');
  // console.log(errorMessage.innerHtml);
  // console.log(document.getElementsByClassName('error-message').innerHTML);
  const errorMessage = event.target.nextElementSibling;
  if (errorMessage) {
    errorMessage.textContent = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops submission of form

  // clear previous error messages
  const errorMessage = document.getElementsByClassName("error-message");
  errorMessage.textContent = "";

  // Validate email
  const emailValue = document.getElementById("email").value;
  const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailExp.test(emailValue)) {
    document.getElementById("emailError").textContent =
      "Please provide a valid email";
    emailInput.style.border = "1.5px solid hsl(0, 93%, 68%)";
    document.querySelector(".error-icon").style.display = "block";
  } else {
    // Submit form if input is correct
      form.submit();
  }
});

// Change style such as disappearing error icon, outline style and border style of email input
emailInput.addEventListener("input", function () {
  document.querySelector(".error-icon").style.display = "none";
  emailInput.style.border = "none";
  emailInput.style.outline = "1px solid hsl(0, 93%, 68%)";
});

