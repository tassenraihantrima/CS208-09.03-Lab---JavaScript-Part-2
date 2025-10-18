function isStrongPassword(password) {
  if (typeof password !== "string") return false;
  const longEnough = password.length >= 8;
  const noPassword = !password.toLowerCase().includes("password");
  const hasUpper   = /[A-Z]/.test(password);
  return longEnough && noPassword && hasUpper;
}

function handlePasswordCheck(e) {
  e.preventDefault();
  const pwd = document.getElementById("password")?.value || "";
  alert(isStrongPassword(pwd) ? "password is strong" : "password is weak");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-form")?.addEventListener("submit", handlePasswordCheck);

  console.log(isStrongPassword("Qwerty"));        
  console.log(isStrongPassword("passwordQwerty"));
  console.log(isStrongPassword("qwerty123"));  
  console.log(isStrongPassword("Qwerty123")); 
});