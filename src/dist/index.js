"use strict";
// login inputs
const loginEmailInput = document.getElementById("login-email-input");
const loginPasswordInput = document.getElementById("login-password-input");
const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");
// register inputs
const registerEmailInput = document.getElementById("register-email-input");
const registerPhoneInput = document.getElementById("register-phone-input");
const registerNameInput = document.getElementById("register-name-input");
const registerPasswordInput = document.getElementById("register-password-input");
const registerRepasswordInput = document.getElementById("register-repassword-input");
const registerForm = document.getElementById("register-form");
const fetchDataLogin = async () => {
    try {
        const response = await fetch("http://localhost:3200/user/login", {
            method: "POST",
            body: JSON.stringify({
                email: loginEmailInput.value,
                password: loginPasswordInput.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const json = await response.json();
        // console.log(response.status);
        console.log(json);
        // if (response.status === 200) {
        //   window.location.href = "http://127.0.0.1:5500/public/main.html";
        // }
        // console.log(json);
    }
    catch (error) {
        console.log(error);
    }
};
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchDataLogin();
});
const fetchDataRegister = async () => {
    try {
        const response = await fetch("http://localhost:3200/user/register", {
            method: "POST",
            body: JSON.stringify({
                email: registerEmailInput.value,
                phone: registerPhoneInput.value,
                name: registerNameInput.value,
                password: registerPasswordInput.value,
                confirm_password: registerRepasswordInput.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const json = await response.json();
        console.log(json);
        console.log(response.status);
    }
    catch (error) {
        console.log(error);
    }
};
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchDataRegister();
});
