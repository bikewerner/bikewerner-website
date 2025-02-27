const CORRECT_PASSWORD = "bike123"; // Passwort hier festlegen

function checkAccess() {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "index.html"; // Zurück zur Login-Seite
    }
}

checkAccess();
