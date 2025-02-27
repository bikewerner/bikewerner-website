const CORRECT_PASSWORD = "bike123"; // Passwort hier ändern
const PASSWORD_VERSION = "v2"; // Diese Versionsnummer erhöhen bei jeder Passwortänderung

function checkAccess() {
    const storedVersion = localStorage.getItem("passwordVersion");
    const isAuthenticated = localStorage.getItem("auth") === "true";

    if (!isAuthenticated || storedVersion !== PASSWORD_VERSION) {
        localStorage.removeItem("auth"); // Löscht alte Logins
        localStorage.setItem("passwordVersion", PASSWORD_VERSION); // Speichert neue Version
        if (window.location.pathname !== "/index.html") {
            window.location.href = "index.html"; // Weiterleitung zur Login-Seite
        }
    }
}

function login() {
    const enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === CORRECT_PASSWORD) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("passwordVersion", PASSWORD_VERSION);
        window.location.href = "home.html"; // Erste geschützte Seite aufrufen
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

if (window.location.pathname !== "/index.html") {
    checkAccess();
}
