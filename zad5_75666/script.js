let isRed = true;

function changeTheme() {
    const link = document.querySelector("link");

    if (isRed) {
        link.href = "green.css";
    } else {
        link.href = "red.css";
    }

    isRed = !isRed;
}

function toggleProjects() {
    const list = document.getElementById("projekty-list");
    const button = document.querySelector(".toggle-btn");

    if (list.style.display === "none") {
        list.style.display = "block";
        button.textContent = "Ukryj";
    } else {
        list.style.display = "none";
        button.textContent = "Pokaż";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let surname = document.getElementById("surname").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let valid = true;

        // очистка ошибок
        document.querySelectorAll(".error").forEach(el => el.textContent = "");
        document.getElementById("successMsg").textContent = "";

        // имя
        if (name === "") {
            document.getElementById("nameError").textContent = "Wpisz imię";
            valid = false;
        } else if (/\d/.test(name)) {
            document.getElementById("nameError").textContent = "Imię nie może zawierać cyfr";
            valid = false;
        }

        // фамилия
        if (surname === "") {
            document.getElementById("surnameError").textContent = "Wpisz nazwisko";
            valid = false;
        } else if (/\d/.test(surname)) {
            document.getElementById("surnameError").textContent = "Nazwisko nie może zawierać cyfr";
            valid = false;
        }

        // email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("emailError").textContent = "Wpisz email";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Niepoprawny email";
            valid = false;
        }

        // сообщение
        if (message === "") {
            document.getElementById("messageError").textContent = "Wpisz wiadomość";
            valid = false;
        }

        if (valid) {
            document.getElementById("successMsg").textContent = "✔ Formularz wysłany!";
            form.reset();
        }
    });

});