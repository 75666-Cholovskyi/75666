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