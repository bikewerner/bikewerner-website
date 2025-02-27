const CORRECT_PASSWORD = "BW"; // Passwort hier festlegen

function checkAccess() {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "index.html"; // Zurück zur Login-Seite
    }
}

checkAccess();
