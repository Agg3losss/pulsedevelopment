<!-- auth.js -->
const validCode = "PulseCode2025";
function checkCode() {
  const input = document.getElementById("codeInput").value;
  const error = document.getElementById("error");
  if (input === validCode) {
    sessionStorage.setItem("admin", "true");
    window.location.href = "dashboard.html";
  } else {
    error.classList.remove("hidden");
  }
}
if (window.location.pathname.includes("dashboard.html") && sessionStorage.getItem("admin") !== "true") {
  window.location.href = "login.html";
}
