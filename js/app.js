let passwordBtn = document.querySelector(".passwordToggler");
let passwordFiled = document.querySelector(".password_field");
let button = document.querySelector(".passwordToggler span");

function passwordShow() {
  if (passwordFiled.type == "password") {
    passwordFiled.type = "text";
    button.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else{
    passwordFiled.type = "password";
    button.innerHTML = '<i class="bi bi-eye"></i>';
  }
}

passwordBtn.addEventListener("click", passwordShow);