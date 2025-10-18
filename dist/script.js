function isStrongPassword(password) {
  if (typeof password !== "string") return false;

  const longEnough = password.length >= 8;
  const noPassword = !password.toLowerCase().includes("password");
  const hasUpper   = /[A-Z]/.test(password);

  return longEnough && noPassword && hasUpper;
}

console.log(isStrongPassword("Qwerty"));         
console.log(isStrongPassword("passwordQwerty")); 
console.log(isStrongPassword("qwerty123"));      
console.log(isStrongPassword("Qwerty123"));     

function handlePasswordCheck(e) {
  e.preventDefault(); 
  const pwd = document.getElementById("password")?.value || "";
  if (isStrongPassword(pwd)) {
    alert("Password is strong");
  } else {
    alert("Password is weak");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", handlePasswordCheck);
  }
});