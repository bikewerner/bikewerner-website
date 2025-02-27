const CORRECT_PASSWORD = "bike123"; // Neues Passwort setzen
const PASSWORD_VERSION = "v1"; // Diese Versionsnummer bei jeder Änderung erhöhen

function checkAccess() {
    const storedVersion = localStorage.getItem("passwordVersion");
    if (localStorage.getItem("auth") !== "true" || storedVersion !== PASSWORD_VERSION) {
        localStorage.removeItem("auth"); // Alte Authentifizierung entfernen
        localStorage.setItem("passwordVersion", PASSWORD_VERSION); // Neue Version speichern
        window.location.href = "index.html"; // Zur Login-Seite weiterleiten
    }
}

checkAccess();
