function checkPassword(event) {
    event.preventDefault();
    
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
    const correctPassword = "1337p4d1lh4";

    if (password === correctPassword) {
        window.location.href = "fase2.html"; // Redirecionar para a Fase 2
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hidden");
    }
}
