const CORRECT_PASSWORD = "Wu"; // Neues Passwort hier setzen
const PASSWORD_VERSION = "v2"; // Erhöhe diese Versionsnummer bei jeder Passwortänderung

function checkAccess() {
    const storedVersion = localStorage.getItem("passwordVersion");
    const isAuthenticated = localStorage.getItem("auth") === "true";

    // Falls das Passwort geändert wurde oder der Nutzer nicht eingeloggt ist, erzwingen wir eine Neuanmeldung
    if (!isAuthenticated || storedVersion !== PASSWORD_VERSION) {
        localStorage.removeItem("auth"); // Alte Authentifizierung entfernen
        localStorage.setItem("passwordVersion", PASSWORD_VERSION); // Neue Version speichern
        window.location.href = "index.html"; // Zur Login-Seite weiterleiten
    }
}

checkAccess();
