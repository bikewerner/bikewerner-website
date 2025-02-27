// Passwort-Konfiguration
const PASSWORD = "bw"; // Ändere dies für ein neues Passwort
const PASSWORD_VERSION = "v3"; // Erhöhe dies, wenn das Passwort geändert wird

// Überprüft, ob der Nutzer bereits eingeloggt ist
function checkAuth() {
    const storedAuth = localStorage.getItem("auth");
    const storedVersion = localStorage.getItem("passwordVersion");

    if (storedAuth === "true" && storedVersion === PASSWORD_VERSION) {
        return true; // Nutzer ist eingeloggt
    }
    return false; // Nutzer ist nicht eingeloggt
}

// Zeigt das Login-Feld, falls nötig
function requireAuth() {
    if (!checkAuth()) {
        // Falls nicht eingeloggt, umleiten zur index.html
        if (!window.location.href.includes("index.html")) {
            window.location.href = "index.html";
        } else {
            showLoginForm();
        }
    }
}

// Zeigt das Login-Formular
function showLoginForm() {
    document.body.innerHTML = `
        <div class="container">
            <h2>Passwort eingeben</h2>
            <input type="password" id="passwordInput" placeholder="Passwort">
            <button onclick="login()">Anmelden</button>
            <p id="errorMessage" style="color: red; display: none;">Falsches Passwort!</p>
        </div>
    `;
}

// Führt die Anmeldung durch
function login() {
    const enteredPassword = document.getElementById("passwordInput").value;
    
    if (enteredPassword === PASSWORD) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("passwordVersion", PASSWORD_VERSION);
        location.reload(); // Seite neu laden, um versteckten Inhalt anzuzeigen
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

// Beim Laden der Seite den Passwortschutz aktivieren
requireAuth();
