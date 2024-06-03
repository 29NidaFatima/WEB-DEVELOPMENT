
document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.getElementById("login-btn");
    var loginForm = document.querySelector(".login-form");

    loginBtn.addEventListener("click", function() {
        loginForm.classList.toggle("active");
    });
});